import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetailsComponent } from './people-details.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { PeopleFacadeService } from '../../state/people.facade.service';
import { signal } from '@angular/core';
import { People } from '../../model/people.model';
import { of } from 'rxjs';


export class MockPeopleFacadeService {
  public peopleList = signal<People[]>([]);
}

export class MockActivatedRoute {
  readonly paramMap = of(convertToParamMap({ id: '123' }));
}

describe('PeopleDetailsComponent', () => {
  let component: PeopleDetailsComponent;
  let fixture: ComponentFixture<PeopleDetailsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleDetailsComponent],
      providers: [ 
        {provide: ActivatedRoute, useClass: MockActivatedRoute},
        {provide: PeopleFacadeService, useClass: MockPeopleFacadeService},

      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
