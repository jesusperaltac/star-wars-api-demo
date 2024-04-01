import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFacadeService } from '../../state/people.facade.service';
import { MatListModule } from '@angular/material/list';
import { People } from '../../model/people.model';
import { Router, RouterOutlet } from '@angular/router';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-people-overview',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterOutlet, MatSidenavModule],
  templateUrl: './people-overview.component.html',
  styleUrl: './people-overview.component.scss'
})
export class PeopleOverviewComponent {
  private peopleFacadeService = inject(PeopleFacadeService);
  private router = inject(Router);

  public peopleList = this.peopleFacadeService.peopleList;

  public selectPerson(people: People, drawer: MatDrawer){
    drawer.toggle();
    this.router.navigate([`/people-overview/people-details/${people.id}`]);
  }

}
