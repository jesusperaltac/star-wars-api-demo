import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'people-overview', pathMatch: 'full' },
    { path: 'people-overview', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)},

];