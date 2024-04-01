import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFacadeService } from '../../state/people.facade.service';
import { MatGridListModule} from '@angular/material/grid-list';
import { People } from '../../model/people.model';
import { Router, RouterOutlet } from '@angular/router';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPeopleComponent } from '../add-people/add-people.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-people-overview',
  standalone: true,
  imports: [
    CommonModule, 
    MatGridListModule, 
    RouterOutlet, 
    MatSidenavModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDialogModule,
    ReactiveFormsModule, 
    FormsModule,
    MatInputModule
  ],
  templateUrl: './people-overview.component.html',
  styleUrl: './people-overview.component.scss'
})
export class PeopleOverviewComponent {
  private peopleFacadeService = inject(PeopleFacadeService);
  private router = inject(Router);

  private filterQuery = signal<string>('');
  public peopleList = computed(() => {
    return this.peopleFacadeService.peopleList().filter(x => x.name.toLowerCase().includes(this.filterQuery().toLowerCase()));
  });

  constructor(public dialog: MatDialog) {}

  public selectPerson(people: People, drawer: MatDrawer){
    drawer.open();
    this.router.navigate([`/people-overview/people-details/${people.id}`]);
  }

  public deletePerson(people: People, drawer: MatDrawer) {
    drawer.close();
    this.peopleFacadeService.deletePeople(people);
  }

  public addPeople() {
    this.dialog.open(AddPeopleComponent);
  }

  applyFilter(value: string): void {
    this.filterQuery.set(value)
  }

}
