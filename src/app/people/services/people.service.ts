import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private http = inject(HttpClient);

  getAll<PeopleResponse>(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${environment.backend.url}/api/people/`);
  }

}
