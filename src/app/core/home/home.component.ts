import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaRepositoryService } from 'src/app/model/categoria-repository.service';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';
import { Prodotto } from '../../model/prodotto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodotti: Observable<Prodotto[]> ;
  categorie: Observable<Categoria[]>;

  constructor(private repo: ProdottoRepositoryService, private repocat : CategoriaRepositoryService){
    this.prodotti = repo.getAll();
    this.categorie = repocat.getAll();
  }

  showComprato(nome:string){
    alert(nome + "!!");
  }

  showIdCategoria(id:number){
    if(id == 0){
      this.prodotti = this.repo.getAll();
    }else{
      this.prodotti = this.repo.getByCategoria([id]);
    }
    
  }

  ngOnInit(): void {
  }

}
