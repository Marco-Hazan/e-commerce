import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from './LoginRequest';
import { Utente } from './Utente';

@Injectable()
export class UtenteRepositoryService {

  urlsignup: string = "http://localhost:8080/ecommerce/api/auth/signup"
  urlsignin: string = "http://localhost:8080/ecommerce/api/auth/signin"

  constructor(private http: HttpClient) { }

  save(utente:Utente): Observable<Utente>{
    return this.http.post<Utente>(this.urlsignup,utente);
  }


  login(req: LoginRequest): Observable<any> {
    return this.http.post<LoginRequest>(this.urlsignin,req);
  }
}
