import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourceService } from './datasource.service';
import { ProdottoRepositoryService } from './prodotto-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaRepositoryService } from './categoria-repository.service';
import { UtenteRepositoryService } from './utente-repository.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [DatasourceService, ProdottoRepositoryService, CategoriaRepositoryService, UtenteRepositoryService]
})
export class ModelModule { }
