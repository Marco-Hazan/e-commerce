import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaRepositoryService } from 'src/app/model/categoria-repository.service';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';

@Component({
  selector: 'app-form-prodotto',
  templateUrl: './form-prodotto.component.html',
  styleUrls: ['./form-prodotto.component.css']
})
export class FormProdottoComponent implements OnInit {

  categorie: Observable<Categoria[]>
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
  constructor(private repo: ProdottoRepositoryService, private router:Router, private route: ActivatedRoute, private catService: CategoriaRepositoryService) {
    let param = route.snapshot.paramMap.get("id");
    this.categorie = catService.getAll();
    if(param){
      this.prodottoId = Number(param);
      this.repo.get(this.prodottoId)
      .subscribe( p => {
        this.prodotto = p;
        this.formProdotto.setValue({
          'nome': p.nome, 
          'descrizione': p.descrizione,
          'prezzo' : p.prezzo,
          'taglia' : p.taglia,
          'immagine' : p.immagine,
          'categoria' : p.categoria?.id
        });
      })
      this.modifica = true;
    }
    this.formProdotto = new FormGroup({
      'nome': new FormControl( this.prodotto.nome,[ Validators.required, Validators.minLength(2) ]),
      'descrizione': new FormControl(this.prodotto.descrizione, [Validators.required, Validators.maxLength(20)]),
      'prezzo': new FormControl(this.prodotto.prezzo, [Validators.required]),
      'taglia': new FormControl(this.prodotto.taglia, [Validators.required]),
      'immagine': new FormControl(this.prodotto.immagine, [Validators.required]),
      'categoria' : new FormControl(this.prodotto.categoria?.id, [Validators.required])
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
    return this.formProdotto.get('immagine');
  }

  get categoria(){
    return this.formProdotto.get('categoria');
  }

  inviaProdotto(){
    if(this.formProdotto.valid){
      let p:Prodotto = {
        "nome" : this.nome?.value,
        "descrizione" : this.descrizione?.value,
        "prezzo": Number(this.prezzo?.value),
        "immagine" : this.immagine?.value,
        "taglia" : Number(this.taglia?.value),
        "categoria" : {
          id: Number(this.categoria?.value),
          nome: "",
          totItems: 0,
        }
      }
      if(this.modifica){
        p.id = this.prodottoId;
        this.repo.modifica(p,this.prodottoId).subscribe(
          data => this.router.navigateByUrl("/list-prodotti")
        );
      }else{
        this.repo.save(p).subscribe(
          data => this.router.navigateByUrl("/list-prodotti")
        );
      }
    }else{
      this.erroreInserimento = "Errore nei dati immessi";
    }
  }


  ngOnInit(): void {
  }

  

}
