import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../model/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private http = inject(HttpClient);

  getPeopleList(url: string | null): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(url ?? `${environment.backend.url}/people/`);
  }

}
