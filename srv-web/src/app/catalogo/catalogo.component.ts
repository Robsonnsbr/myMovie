import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  itensDoCarrinho: Observable<Produto[]> = new Observable<Produto[]>();
  URL_SERVIDOR_UPLOAD_FOTO: string = 'http://localhost:3000/fotos/';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.itensDoCarrinho = this.produtoService.listar();
  }
}
