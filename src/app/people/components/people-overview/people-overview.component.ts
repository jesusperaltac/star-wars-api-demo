import { Component, inject } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../../model/people.model'

@Component({
  selector: 'app-people-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-overview.component.html',
  styleUrl: './people-overview.component.scss'
})
export class PeopleOverviewComponent {
   private peopleService = inject(PeopleService);

   public peopleResponse$: Observable<PeopleResponse> = this.peopleService.getAll(); 

}
