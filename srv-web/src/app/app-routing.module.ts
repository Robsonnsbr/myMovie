import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { CategoriaListarComponent } from './cadastros/categorias/listar.component';
import { CategoriaIncluirComponent } from './cadastros/categorias/incluir.component';
import { CategoriaEditarComponent } from './cadastros/categorias/editar.component';
import { CategoriaExcluirComponent } from './cadastros/categorias/excluir.component';
import { UsuarioListarComponent } from './cadastros/usuarios/listar.component';
import { UsuarioIncluirComponent } from './cadastros/usuarios/incluir.component';
import { UsuarioEditarComponent } from './cadastros/usuarios/editar.component';
import { UsuarioExcluirComponent } from './cadastros/usuarios/excluir.component';
import { FilmeEditarComponent } from './cadastros/filme/editar.component';
import { ProdutoListarComponent } from './cadastros/produtos/listar.component';
import { ProdutoIncluirComponent } from './cadastros/produtos/incluir.component';
import { ProdutoEditarComponent } from './cadastros/produtos/editar.component';
import { ProdutoExcluirComponent } from './cadastros/produtos/excluir.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AuthService as AuthGuard } from './services/auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'catalogo', component: CatalogoComponent },
  {
    path: 'cadastros',
    component: CadastrosComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: FilmeEditarComponent },
      { path: 'produtos', component: ProdutoListarComponent },
      { path: 'produtos/incluir', component: ProdutoIncluirComponent },
      { path: 'produtos/editar/:codigo', component: ProdutoEditarComponent },
      { path: 'produtos/excluir/:codigo', component: ProdutoExcluirComponent },
      { path: 'usuarios', component: UsuarioListarComponent },
      { path: 'usuarios/incluir', component: UsuarioIncluirComponent },
      { path: 'usuarios/editar/:codigo', component: UsuarioEditarComponent },
      { path: 'usuarios/excluir/:codigo', component: UsuarioExcluirComponent },
      { path: 'categorias', component: CategoriaListarComponent },
      { path: 'categorias/incluir', component: CategoriaIncluirComponent },
      {
        path: 'categorias/editar/:codigo',
        component: CategoriaEditarComponent,
      },
      {
        path: 'categorias/excluir/:codigo',
        component: CategoriaExcluirComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
