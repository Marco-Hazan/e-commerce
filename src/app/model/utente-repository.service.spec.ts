import { TestBed } from '@angular/core/testing';

import { UtenteRepositoryService } from './utente-repository.service';

describe('UtenteRepositoryService', () => {
  let service: UtenteRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtenteRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
