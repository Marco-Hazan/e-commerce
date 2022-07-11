import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';

@Injectable()
export class CategoriaRepositoryService {

  constructor(private http: HttpClient) {}

  baseurl:string = "http://localhost:8080/ecommerce/api/v1/categorie"

  getAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.baseurl);
  }

  
}
