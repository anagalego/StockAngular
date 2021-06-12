import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Application';

  constructor(
    private http: HttpClient
  ) {}


  productsInfo = "";

  products:any[] = [];
  
  listAllProducts(products:any) {
    this.products = products;
  }

  showTable() {
    this.http.get("http://127.0.0.1:8080/LibraryMaven/products")
      .subscribe((res:any) => this.listAllProducts(res)
    )
  }

  addToProducts(product:any) {
    this.products.push(product);
  }

  
}