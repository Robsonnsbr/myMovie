import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  produto: Produto = { foto: 'aguasSelvagens.jpg' } as Produto;

  URL_SERVIDOR_UPLOAD_FOTO: string = 'http://localhost:3000/fotos/';

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmeService.carregar().subscribe((filme) => {
      this.produto = filme.produto;
    });
  }
}
