import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeopleComponent } from './add-people.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { PeopleFacadeService } from '../../state/people.facade.service';
import { MockPeopleFacadeService } from '../people-details/people-details.component.spec';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Injectable()
export class MockMatDialogRef {
  close(): void {}
  // Add any other methods or properties used in your component
}
describe('AddPeopleComponent', () => {
  let component: AddPeopleComponent;
  let fixture: ComponentFixture<AddPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPeopleComponent, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useClass: MockMatDialogRef },
        {provide: PeopleFacadeService, useClass: MockPeopleFacadeService},
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
