import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
import { Filme } from 'src/app/models/filme.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class FilmeEditarComponent implements OnInit {
  produtos: Produto[] = [];
  filme: Filme = new Filme();

  URL_SERVIDOR_UPLOAD_FOTO: string = 'http://localhost:3000/fotos/';

  ngOnInit(): void {
    this.filmeService.carregar().subscribe((filme) => {
      this.filme = filme;
    });

    this.produtoService.listar().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  constructor(
    private filmeService: FilmeService,
    private produtoService: ProdutoService
  ) {}

  recarregarFilme() {
    this.produtos.forEach((produto) => {
      if (produto.codigo === this.filme.produto.codigo) {
        this.filme.produto = produto;
      }
    });
  }

  atualizarFilme() {
    this.filmeService.atualizar(this.filme.codigo, this.filme).subscribe(() => {
      alert('Filme alterado!');
    });
  }
}
