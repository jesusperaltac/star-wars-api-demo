import { TestBed } from '@angular/core/testing';

import { PeopleFacadeService } from './people.facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PeopleService } from '../services/people.service';
import { of } from 'rxjs';

export class MockPeopleService {
  getPeopleList(url: string | null) {
    return of({
      count: 82,
      next: '',
      previous: '',
      results: []
    });
  }
}

describe('PeopleFacadeService', () => {
  let service: PeopleFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PeopleService, useClass: MockPeopleService },
      ]
    });
    service = TestBed.inject(PeopleFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
