import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Prodotto } from './model/prodotto';
import { ProdottoRepositoryService } from './model/prodotto-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formProdotto: FormGroup;

  constructor(private repo: ProdottoRepositoryService){
    this.formProdotto = new FormGroup({
      'nome': new FormControl('', Validators.required),
      'prezzo': new FormControl(0, Validators.required),
      'descrizione': new FormControl('', Validators.required),
      'taglia': new FormControl(0, Validators.required),
      'immagine' : new FormControl('', Validators.required)
    });
  }

  get nome(){
    return this.formProdotto.get("nome");
  }

  get prezzo(){
    return this.formProdotto.get("prezzo");
  }

  get descrizione(){
    return this.formProdotto.get("descrizione");
  }

  get taglia(){
    return this.formProdotto.get("taglia");
  }

  get immagine(){
    return this.formProdotto.get("immagine");
  }

  inviaProdotto(){
    if(this.formProdotto.valid){
      /// SALVO PRODOTTO
    }
  }

  title = 'e-commerce';

  



}