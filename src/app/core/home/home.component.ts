import { Component, OnInit } from '@angular/core';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';
import { Prodotto } from '../../model/prodotto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodotti: Prodotto[] ;

  constructor(private repo: ProdottoRepositoryService){
    this.prodotti = repo.getAll();
  }

  showComprato(nome:string){
    alert(nome + "!!");
  }

  ngOnInit(): void {
  }

}
