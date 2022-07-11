import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';

@Component({
  selector: 'app-list-prodotti',
  templateUrl: './list-prodotti.component.html',
  styleUrls: ['./list-prodotti.component.css']
})
export class ListProdottiComponent implements OnInit {

  public prodotti: Observable<Prodotto[]>;
  constructor(private repo:ProdottoRepositoryService) { 
    this.prodotti = repo.getAll();
  }


  rimuovi(id:number|undefined){
    if(id != undefined)
      this.repo.delete(id).subscribe( data => 
        this.prodotti = this.repo.getAll()
      );
      
  }


  ngOnInit(): void {
  }

}
