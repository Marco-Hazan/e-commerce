import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  
  constructor() { }

  saveToken(token:string){
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(){
    return sessionStorage.getItem(TOKEN_KEY)
  }


  saveUser(user:any){
    sessionStorage.setItem(USER_KEY,JSON.stringify(user));
  }

  getUser(){
    let x = sessionStorage.getItem(USER_KEY)
    if(x != null){
      return x;
    }
    return x;
  }

  clear(){
    sessionStorage.clear();
  }

}
