import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFacadeService } from '../../state/people.facade.service';

@Component({
  selector: 'app-people-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-overview.component.html',
  styleUrl: './people-overview.component.scss'
})
export class PeopleOverviewComponent {
  private peopleFacadeService = inject(PeopleFacadeService);
  public peopleList = this.peopleFacadeService.peopleList;

}
