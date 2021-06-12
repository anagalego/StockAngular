import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarProdutoComponent,
    ListarProdutoComponent,
    TabelaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
