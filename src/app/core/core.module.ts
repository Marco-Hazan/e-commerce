import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { ListProdottiComponent } from './list-prodotti/list-prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormProdottoComponent } from './form-prodotto/form-prodotto.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from '../helpers/auth.interceptor';



@NgModule({
  declarations: [
    ListProdottiComponent,
    ProdottoComponent,
    HomeComponent,
    FormProdottoComponent,
    SideBarComponent,
    RegistrazioneComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ModelModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthInterceptor]
})
export class CoreModule { }
