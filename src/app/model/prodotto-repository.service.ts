import { Injectable } from '@angular/core';
import { DatasourceService } from './datasource.service';
import { Prodotto } from './prodotto';

@Injectable()
export class ProdottoRepositoryService {

  constructor(private datasource: DatasourceService) { }

  getAll(): Prodotto[]{
    return this.datasource.getAll();
  }

  save(p: Prodotto): number{
    return this.datasource.saveProdotto(p);
  }

  get(id:number){
    return this.datasource.get(id);
  }

  delete(id:number){
    this.datasource.deleteProdotto(id);
  }

  modifica(p:Prodotto,id:number){
    this.datasource.modifica(p,id);
  }
}
