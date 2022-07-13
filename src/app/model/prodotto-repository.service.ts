import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Prodotto } from './prodotto';
import { Categoria } from './Categoria';

@Injectable()
export class ProdottoRepositoryService {

  baseurl = "http://localhost:8080/ecommerce/api/v1/prodotti"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>(this.baseurl);
  }

  save(p: Prodotto): Observable<Prodotto>{
    return this.http.post<Prodotto>(this.baseurl,p);
  }

  get(id:number): Observable<Prodotto>{
    return this.http.get<Prodotto>(this.baseurl+"/"+id);
  }

  delete(id:number): Observable<Object>{
    return this.http.delete(this.baseurl+"/"+id)
  }

  modifica(p : Prodotto, id:number) : Observable<Prodotto>{
    return this.http.put<Prodotto>(this.baseurl + "/" + id, p);
  }

  getByCategoria(categorie:number[]):Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>(this.baseurl + "/categoria/",{params: {categorie:categorie}});
  }
}
