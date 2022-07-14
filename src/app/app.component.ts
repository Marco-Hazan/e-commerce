import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Prodotto } from './model/prodotto';
import { ProdottoRepositoryService } from './model/prodotto-repository.service';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedin:boolean = false;
  constructor(private tokenService: TokenStorageService){
    if(this.tokenService.getToken() != null){
      this.loggedin = true;
    }
  }



  



}