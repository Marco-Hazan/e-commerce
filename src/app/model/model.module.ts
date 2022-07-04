import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourceService } from './datasource.service';
import { ProdottoRepositoryService } from './prodotto-repository.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DatasourceService, ProdottoRepositoryService]
})
export class ModelModule { }
