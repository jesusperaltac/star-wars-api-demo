import { Injectable, OnDestroy, inject, signal } from "@angular/core";
import { BehaviorSubject, Subject, switchMap, takeUntil, tap } from "rxjs";
import { People, PeopleResponse } from "../model/people.model";
import { PeopleService } from "../services/people.service";

@Injectable({
  providedIn: "root",
})
export class PeopleFacadeService implements OnDestroy {
  public peopleList = signal<People[]>([]);
  private peopleService = inject(PeopleService);
  private peopleListPageSub$ = new BehaviorSubject<string | null>(null);
  private stopPeopleListPageSub$ = new Subject<void>();

  constructor() {
    this.peopleListPageSub$.pipe(
        switchMap((url) => this.peopleService.getPeopleList(url)),
        tap((data: PeopleResponse) => this.handlePeopleResponse(data)),
        takeUntil(this.stopPeopleListPageSub$)
      ).subscribe();
  }

  private handlePeopleResponse(data: PeopleResponse) {
    this.peopleList.update((values) => [...values, ...data.results]);
    if (data.next) {
      this.peopleListPageSub$.next(data.next);
    } else {
      this.stopPeopleListPageSub$.next();
    }
  }

  ngOnDestroy(): void {
    this.stopPeopleListPageSub$.next();
  }
}
