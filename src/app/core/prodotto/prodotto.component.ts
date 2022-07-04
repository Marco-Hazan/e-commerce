import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Prodotto } from '../../model/prodotto';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  @Input() prodotto: Prodotto = {
    "nome": "",
    "descrizione" : "",
    "prezzo" : 0,
    "taglia" : 0,
    "immagine" : ""
  };

  @Output() buy: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  cliccaCompra(){
    this.buy.emit(this.prodotto.nome);
  }

}
