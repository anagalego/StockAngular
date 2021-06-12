import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent {
  
  @Input() products:any = [];

  constructor() { }

}
