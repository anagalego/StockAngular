import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})

export class CriarProdutoComponent {
  @Output() newProduct = new EventEmitter();
  tittle = 'Create Product';

  constructor(
    private http: HttpClient
  ) {}

  prodTaxes = [4, 5, 6, 9, 12, 13];


  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    tax: new FormControl(''),
    discount: new FormControl(''),
  });

  productInfo = "";
  productsInfo = "";

  price:number = 1;
  tax:number = 1;
  discount:number = 1;
  finalPrice:number = (this.tax*this.price/100+this.price)-(this.tax*this.price/100+this.price)*this.discount/100;

  updatePrice(value:number){
    this.price = value;
  }

  updateTax(value:number){
    this.tax = value;
  }

  updateDiscount(value:number){
    this.discount = value;
  }



  addProduct(product:any) {
    this.productInfo = JSON.stringify(product);
    this.newProduct.emit(product);
  }

  listAllProductsInfo(products:any) {
    this.productsInfo = JSON.stringify(products);
  }

  createProduct() {
    this.http.post("http://127.0.0.1:8080/LibraryMaven/products", this.productForm.value)
      .subscribe((res:any) => this.addProduct(res)
    )
  }

  getProducts() {
    this.http.get("http://127.0.0.1:8080/LibraryMaven/products")
      .subscribe((res:any) => this.listAllProductsInfo(res)
    )
  }
  
}