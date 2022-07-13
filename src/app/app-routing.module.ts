import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ListProdottiComponent } from './core/list-prodotti/list-prodotti.component';
import { FormProdottoComponent } from './core/form-prodotto/form-prodotto.component';
import { RegistrazioneComponent } from './core/registrazione/registrazione.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path: "list-prodotti", component: ListProdottiComponent },
  {path:"add-prodotto",component: FormProdottoComponent},
  {path:"modifica-prodotto/:id",component: FormProdottoComponent},
  {path:"registrazione", component: RegistrazioneComponent},
  {path: "login", component: LoginComponent},
  {path: "**", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
