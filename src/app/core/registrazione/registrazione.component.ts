import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Utente } from 'src/app/model/Utente';
import { UtenteRepositoryService } from 'src/app/model/utente-repository.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  formRegistrazione: FormGroup;
  erroreInserimento: string = "";
  utente: Utente = {
    nome: "",
    cognome: "",
    username: "",
    password: "",
    email: ""
  }

  constructor(private repo: UtenteRepositoryService, private router: Router) {
    this.formRegistrazione = new FormGroup({
      "nome": new FormControl("", Validators.required),
      "cognome": new FormControl("", Validators.required),
      "username": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.required)
    })
  }

  get nome() {
    return this.formRegistrazione.get("nome");
  }

  get cognome() {
    return this.formRegistrazione.get("cognome")
  }

  get username() {
    return this.formRegistrazione.get("username")
  }

  get password() {
    return this.formRegistrazione.get("password")
  }

  get email() {
    return this.formRegistrazione.get("email");
  }

  registrazione() {
    if (this.formRegistrazione.valid) {
      this.repo.save(this.utente).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl("home");
        });
    }
  }

  ngOnInit(): void {
  }

}
