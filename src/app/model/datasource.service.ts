import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto';

@Injectable()
export class DatasourceService {

  constructor() { }

  private prodotti: Prodotto[] = [
    {
      "nome" : "Scarpe nike",
      "descrizione": "Belle scarpe",
      "prezzo" : 222,
      "taglia": 43,
      "immagine": "/assets/images/sneaker.webp"
    },
    {
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
}
