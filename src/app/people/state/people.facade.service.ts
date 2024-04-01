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
    const peopleListWithIds = this.mapDataToPeopleDto(data.results);
    this.peopleList.update((values) => [...values, ...peopleListWithIds]);
    
    if (data.next) {
      this.peopleListPageSub$.next(data.next);
    } else {
      this.stopPeopleListPageSub$.next();
    }
  }

  private mapDataToPeopleDto(peopleList: People[]){
    return peopleList.map( (people: People) => {
      return {
        ...people,
        id: this.extractIdfromPeopleUrl(people.url)
      }
      
    })
  }

  private extractIdfromPeopleUrl(url: string): string {
   const match = url.match(/\/(\d+)\/?$/);
   return match && match[1] ? match[1] : '';
  }

  deletePeople(people: People) {
    this.peopleList.update((values) => [...values.filter( v => v != people)]);
  }

  ngOnDestroy(): void {
    this.stopPeopleListPageSub$.next();
  }
}
