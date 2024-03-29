import { Routes } from '@angular/router';
import { PeopleOverviewComponent } from './people/components/people-overview/people-overview.component';

export const routes: Routes = [
    { path: 'people-overview', component: PeopleOverviewComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'people-overview' },

];