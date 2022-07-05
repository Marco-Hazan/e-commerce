import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';

@Component({
  selector: 'app-modifica-prodotto',
  templateUrl: './modifica-prodotto.component.html',
  styleUrls: ['./modifica-prodotto.component.css']
})
export class ModificaProdottoComponent implements OnInit {

  formModifica:FormGroup;
  prodotto!:Prodotto;
  prodottoId!:number;
  constructor(private repo: ProdottoRepositoryService, private route: ActivatedRoute,  private router:Router) {
    let param = route.snapshot.paramMap.get("id");
    if(param){
      this.prodottoId = Number(param);
      let p = this.repo.get(this.prodottoId);
        if(p){
          this.prodotto = p;
        }
    }
    this.formModifica = new FormGroup({
      'nome': new FormControl( this.prodotto.nome,[ Validators.required, Validators.minLength(2) ]),
      'descrizione': new FormControl(this.prodotto.descrizione, [Validators.required, Validators.maxLength(20)]),
      'prezzo': new FormControl(this.prodotto.prezzo, [Validators.required]),
      'taglia': new FormControl(this.prodotto.taglia, [Validators.required]),
      'immagine': new FormControl(this.prodotto.immagine, [Validators.required])
    });
  }



  ngOnInit(): void {
    
  }

  get nome(){
    return this.formModifica.get('nome');
  }

  get descrizione(){
    return this.formModifica.get('descrizione');
  }

  get prezzo(){
    return this.formModifica.get('prezzo');
  }

  get taglia(){
    return this.formModifica.get('taglia');
  }

  get immagine(){
    return this.formModifica.get('immagine')
  }

  modificaProdotto(){
    if(this.formModifica.valid){
      let p:Prodotto = {
        "nome" : this.nome?.value,
        "descrizione" : this.descrizione?.value,
        "prezzo": Number(this.prezzo?.value),
        "immagine" : this.immagine?.value,
        "taglia" : Number(this.taglia?.value)
      }
      p.id = this.prodottoId;
      let id = this.repo.modifica(p,this.prodottoId);
      this.router.navigateByUrl("/list-prodotti")
    }
  }

}
