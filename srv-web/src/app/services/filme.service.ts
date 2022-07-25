import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Filme } from '../models/filme.model';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  url = 'http://localhost:3000/filme';

  constructor(protected http: HttpClient) {}

  carregar(): Observable<Filme> {
    let response = this.http.get<Filme>(this.url);
    return response;
  }

  atualizar(codigo: number, filme: Filme): Observable<Filme> {
    const path = `${this.url}/${codigo}`;
    return this.http.put<Filme>(path, filme);
  }
}
