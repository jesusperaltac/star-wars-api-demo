import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { PeopleFacadeService } from '../../state/people.facade.service';
import { People } from '../../model/people.model';
import { Subject, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-people-details',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './people-details.component.html',
  styleUrl: './people-details.component.scss'
})
export class PeopleDetailsComponent implements OnInit, OnDestroy{
  private route = inject(ActivatedRoute);
  private peopleFacadeService = inject(PeopleFacadeService);

  private peopleList = this.peopleFacadeService.peopleList;
  private destroy$ = new Subject<void>();

  public people = signal<People | undefined>(undefined);


  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap( param => {
        const peopleId = param.get('id')
        this.people.set(this.peopleList().find( value => value.id === peopleId));
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
