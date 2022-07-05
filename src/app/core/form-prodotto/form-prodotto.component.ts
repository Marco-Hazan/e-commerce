import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';

@Component({
  selector: 'app-form-prodotto',
  templateUrl: './form-prodotto.component.html',
  styleUrls: ['./form-prodotto.component.css']
})
export class FormProdottoComponent implements OnInit {

  formProdotto: FormGroup;
  prodottoId!: number;
  erroreInserimento = "";
  prodotto: Prodotto = {
    "nome" : "",
    "descrizione" : "",
    "prezzo" : 0,
    "taglia" : 0,
    "immagine" : ""
   };
  modifica = false;
  constructor(private repo: ProdottoRepositoryService, private router:Router, private route: ActivatedRoute) {
    let param = route.snapshot.paramMap.get("id");
    if(param){
      this.prodottoId = Number(param);
      let p = this.repo.get(this.prodottoId);
        if(p){
          this.prodotto = p;
        }
        this.modifica = true;
    }
    this.formProdotto = new FormGroup({
      'nome': new FormControl( this.prodotto.nome,[ Validators.required, Validators.minLength(2) ]),
      'descrizione': new FormControl(this.prodotto.descrizione, [Validators.required, Validators.maxLength(20)]),
      'prezzo': new FormControl(this.prodotto.prezzo, [Validators.required]),
      'taglia': new FormControl(this.prodotto.taglia, [Validators.required]),
      'immagine': new FormControl(this.prodotto.immagine, [Validators.required])
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
      if(this.modifica){
        p.id = this.prodottoId;
        let id = this.repo.modifica(p,this.prodottoId);
      }else{
        let id = this.repo.save(p);
      }
      this.router.navigateByUrl("/list-prodotti");
    }else{
      this.erroreInserimento = "Errore nei dati immessi";
    }
  }



  ngOnInit(): void {
  }

  

}
