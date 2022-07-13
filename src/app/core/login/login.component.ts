import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/LoginRequest';
import { UtenteRepositoryService } from 'src/app/model/utente-repository.service';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  erroreInserimento:string = "";
  loginRequest : LoginRequest = {
    username : "",
    password : ""
  }

  constructor(private repo: UtenteRepositoryService, private router: Router, private tokenStorage: TokenStorageService) {

    this.formLogin = new FormGroup({
      "username" : new FormControl("",Validators.required),
      "password": new FormControl("", Validators.required)
    });
   
  }

  get username(){
    return this.formLogin.get("username");
  }

  get password(){
    return this.formLogin.get("password");
  }

  login(){
    this.repo.login(this.loginRequest).subscribe(
      data =>{
        console.log(data);
        this.router.navigateByUrl("/home");
      }
    )
  }

  ngOnInit(): void {
  }

}
