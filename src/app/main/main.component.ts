import { Component, DoCheck, OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: any[] = []
  categories: any[] = []
  carts: any[] = []
  

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategories()
  }


  // Get All Products
  getAllProducts(): void {
    this.dataService.getAllProducts()
    .subscribe((res: any) => {
      this.products.push(res)
      console.log(this.products);
      
    })
  }

  // Sort All Products By Price
  sortProductsByPrice() {
    if(this.products) {
       this.products[0].sort((a: any, b: any) => b.price - a.price)
  }
}

  // Sort All Products By Rating
  sortProductsByRate() {
    if(this.products) {
      this.products[0].sort((a: any, b: any) => b.rating.rate - a.rating.rate)
    }
  }

  // Get All Categories
  getAllCategories() {
    if(this.products) {
      this.dataService.getAllCategories()
      .subscribe((res: any) => {
        this.categories.push(res)
        
      })
    }
  }

  // Get Product By Selected Category
  getByCategory(category: string) {
    this.dataService.getProductByCategory(category)
    .subscribe(res => {
      this.products = []
      this.products.push(res)
    })
  }

  // Delete Product
  deleteProduct(product: any) {
    this.dataService.deleteProduct(product)
    .subscribe((res: any) => {
      const index = this.products[0].indexOf(product)
      this.products[0].splice(index, 1)
      
    })
  }

  // Add Product To Cart
  addToCart(product: any) {
    if(this.products) {
      const index = this.products[0].indexOf(product)
      const selectedProduct = this.products[0].splice(index, 1)
      this.carts.push(selectedProduct)
      console.log(this.carts);
    }
  }

  
  
}