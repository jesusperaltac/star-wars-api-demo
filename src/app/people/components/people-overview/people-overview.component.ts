import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFacadeService } from '../../state/people.facade.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-people-overview',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './people-overview.component.html',
  styleUrl: './people-overview.component.scss'
})
export class PeopleOverviewComponent {
  private peopleFacadeService = inject(PeopleFacadeService);
  public peopleList = this.peopleFacadeService.peopleList;

}
