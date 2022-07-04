import { Injectable } from '@angular/core';
import { DatasourceService } from './datasource.service';
import { Prodotto } from './prodotto';

@Injectable()
export class ProdottoRepositoryService {

  constructor(private datasource: DatasourceService) { }

  getAll(): Prodotto[]{
    return this.datasource.getAll();
  }
}
