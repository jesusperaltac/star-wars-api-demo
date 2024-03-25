import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleOverviewComponent } from './people-overview.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeopleOverviewComponent', () => {
  let component: PeopleOverviewComponent;
  let fixture: ComponentFixture<PeopleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleOverviewComponent, CommonModule, HttpClientTestingModule]
      })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
