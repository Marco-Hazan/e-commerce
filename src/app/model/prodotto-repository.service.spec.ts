import { TestBed } from '@angular/core/testing';

import { ProdottoRepositoryService } from './prodotto-repository.service';

describe('ProdottoRepositoryService', () => {
  let service: ProdottoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
