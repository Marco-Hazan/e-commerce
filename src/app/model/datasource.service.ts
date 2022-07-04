import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto';

@Injectable()
export class DatasourceService {

  constructor() { }

  private prodotti: Prodotto[] = [
    {
      "id":1,
      "nome" : "Scarpe nike",
      "descrizione": "Belle scarpe",
      "prezzo" : 222,
      "taglia": 43,
      "immagine": "/assets/images/sneaker.webp"
    },
    {
      "id":2,
      "nome" : "Scarpe adidas",
      "descrizione": "Belle scarpe",
      "prezzo" : 100,
      "taglia": 44,
      "immagine": "/assets/images/sneaker.webp"
    }
  ]

  getAll(): Prodotto[]{
    return this.prodotti;
  }

  saveProdotto(p:Prodotto):number{
    p.id = this.prodotti.length + 1;
    this.prodotti.push(p);
    return p.id;
  }

  deleteProdotto(id:number){
    let p = this.prodotti.find(p => p.id == id);
    if(p != undefined){
      let index = this.prodotti.indexOf(p);
      this.prodotti.splice(index,1);
    }
  }

  get(id:number){
    console.log(id);
    return this.prodotti.find(p => p.id == id);
  }

  modifica(p:Prodotto, id:number){
    let prod = this.prodotti.find(p => p.id == id);
    if(prod != undefined){
      this.prodotti[this.prodotti.indexOf(prod)] = p;
    }
    
  }
}
