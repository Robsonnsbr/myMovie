import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { SobreComponent } from './sobre/sobre.component';
import { BarraComponent } from './cadastros/barra/barra.component';
import { SeletorHomeComponent } from './home/seletor/seletor.component';
import { FilmeEditarComponent } from './cadastros/filme/editar.component';
import { CategoriaListarComponent } from './cadastros/categorias/listar.component';
import { CategoriaIncluirComponent } from './cadastros/categorias/incluir.component';
import { CategoriaEditarComponent } from './cadastros/categorias/editar.component';
import { CategoriaExcluirComponent } from './cadastros/categorias/excluir.component';
import { UsuarioListarComponent } from './cadastros/usuarios/listar.component';
import { UsuarioIncluirComponent } from './cadastros/usuarios/incluir.component';
import { UsuarioExcluirComponent } from './cadastros/usuarios/excluir.component';
import { UsuarioEditarComponent } from './cadastros/usuarios/editar.component';
import { ProdutoListarComponent } from './cadastros/produtos/listar.component';
import { ProdutoIncluirComponent } from './cadastros/produtos/incluir.component';
import { ProdutoEditarComponent } from './cadastros/produtos/editar.component';
import { ProdutoExcluirComponent } from './cadastros/produtos/excluir.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    CatalogoComponent,
    CadastrosComponent,
    SobreComponent,
    BarraComponent,
    SeletorHomeComponent,
    CategoriaListarComponent,
    CategoriaIncluirComponent,
    CategoriaExcluirComponent,
    CategoriaEditarComponent,
    UsuarioListarComponent,
    UsuarioIncluirComponent,
    UsuarioExcluirComponent,
    UsuarioEditarComponent,
    FilmeEditarComponent,
    ProdutoListarComponent,
    ProdutoEditarComponent,
    ProdutoIncluirComponent,
    ProdutoExcluirComponent,
    LoginComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
