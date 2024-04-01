import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleOverviewComponent } from './components/people-overview/people-overview.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

const routes: Routes = [      
  {
    path: '',
    component: PeopleOverviewComponent,
    children: [
      {path: 'people-details/:id', component: PeopleDetailsComponent}
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
