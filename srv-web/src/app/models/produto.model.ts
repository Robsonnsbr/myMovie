import { Categoria } from './categoria.model';
import { Descricao } from './descricao.model';

export class Produto {
  codigo: number = 0;
  nome: string = '';
  descricao: Descricao = new Descricao(); //TypeError: Cannot read properties of undefined (reading 'todas as propriedades de descrição')by:Robson
  foto: string = '';
  categoria: Categoria = new Categoria();
  pontosDasAvaliacoes: number = 0;
  totalDeAvaliacoes: number = 0;
}
