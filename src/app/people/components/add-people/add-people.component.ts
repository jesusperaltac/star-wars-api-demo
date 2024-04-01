import {Component, inject, signal} from '@angular/core';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { PeopleFacadeService } from '../../state/people.facade.service';
import { People } from '../../model/people.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-people',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    CommonModule
  ],templateUrl: './add-people.component.html',
  styleUrl: './add-people.component.scss'
})
export class AddPeopleComponent {

  private peopleFacadeService = inject(PeopleFacadeService);

  private id = uuidv4();

  constructor( public dialog: MatDialogRef<AddPeopleComponent>) {
  }

  peopleForm = new FormGroup({
    name: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    mass: new FormControl('', Validators.required),
    birth_year: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    id: new FormControl(this.id, Validators.required),
    url: new FormControl(this.id, Validators.required),
  });

  cancel(): void {
    this.dialog.close();
  }

  save() {
    this.peopleForm.markAsTouched();
    if(this.peopleForm.valid){
      const people = this.peopleForm.value as People;
      this.peopleFacadeService.addPeople(people);
      this.dialog.close();
    }
  }

}