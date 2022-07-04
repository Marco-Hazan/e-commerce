import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';

@Component({
  selector: 'app-list-prodotti',
  templateUrl: './list-prodotti.component.html',
  styleUrls: ['./list-prodotti.component.css']
})
export class ListProdottiComponent implements OnInit {

  public prodotti: Prodotto[] = [];
  constructor(private repo:ProdottoRepositoryService) { 
    this.prodotti = repo.getAll();
  }


  rimuovi(id:number|undefined){
    if(id != undefined)
      this.repo.delete(id);
  }


  ngOnInit(): void {
  }

}
