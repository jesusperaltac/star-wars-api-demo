import { TestBed } from '@angular/core/testing';

import { PeopleFacadeService } from './people.facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeopleFacadeService', () => {
  let service: PeopleFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PeopleFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
