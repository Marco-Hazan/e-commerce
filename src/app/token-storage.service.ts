import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  
  constructor() { }

  saveToken(token:string){
    sessionStorage.setItem("jwt", token);
  }
}
