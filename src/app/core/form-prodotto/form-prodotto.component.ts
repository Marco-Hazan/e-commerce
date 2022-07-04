import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-prodotto',
  templateUrl: './form-prodotto.component.html',
  styleUrls: ['./form-prodotto.component.css']
})
export class FormProdottoComponent implements OnInit {

  formProdotto: FormGroup;

  constructor() {
    this.formProdotto = new FormGroup({
      'nome': new FormControl( '',[ Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z ]+$"), ]),
      'descrizione': new FormControl('', [Validators.required]),
      'prezzo': new FormControl(0, [Validators.required]),
      'taglia': new FormControl(0, [Validators.required]),
      'immagine': new FormControl('', [Validators.required])
    });
   }

   get nome(){
    return this.formProdotto.get('nome');
  }

  get cognome(){
    return this.formProdotto.get('cognome');
  }

  get citta(){
    return this.formProdotto.get('citta');
  }

  get indirizzo(){
    return this.formProdotto.get('indirizzo');
  }

  inviaProdotto(){
    
  }



  ngOnInit(): void {
  }

  

}
