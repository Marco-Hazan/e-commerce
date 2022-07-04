import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';

@Component({
  selector: 'app-form-prodotto',
  templateUrl: './form-prodotto.component.html',
  styleUrls: ['./form-prodotto.component.css']
})
export class FormProdottoComponent implements OnInit {

  formProdotto: FormGroup;

  constructor(private repo: ProdottoRepositoryService, private router:Router) {
    this.formProdotto = new FormGroup({
      'nome': new FormControl( '',[ Validators.required, Validators.minLength(2) ]),
      'descrizione': new FormControl('', [Validators.required]),
      'prezzo': new FormControl(0, [Validators.required]),
      'taglia': new FormControl(0, [Validators.required]),
      'immagine': new FormControl('', [Validators.required])
    });
   }

   get nome(){
    return this.formProdotto.get('nome');
  }

  get descrizione(){
    return this.formProdotto.get('descrizione');
  }

  get prezzo(){
    return this.formProdotto.get('prezzo');
  }

  get taglia(){
    return this.formProdotto.get('taglia');
  }

  get immagine(){
    return this.formProdotto.get('immagine')
  }

  inviaProdotto(){
    if(this.formProdotto.valid){
      let p:Prodotto = {
        "nome" : this.nome?.value,
        "descrizione" : this.descrizione?.value,
        "prezzo": Number(this.prezzo?.value),
        "immagine" : this.immagine?.value,
        "taglia" : Number(this.taglia?.value)
      }
      let id = this.repo.save(p);
      this.router.navigateByUrl("/list-prodotti")
    }
  }



  ngOnInit(): void {
  }

  

}
