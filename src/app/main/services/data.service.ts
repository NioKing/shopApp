import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  // Get All Products
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }

  // Get Product By ID
  getProductById(id: string) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

  // Get Limited Products
  getLimitedProducts(limit: string) {
    return this.http.get(`https://fakestoreapi.com/products?limit=${limit}`)
  }
  
  // Get All Categories
  getAllCategories() {
    return this.http.get(`https://fakestoreapi.com/products/categories`)
  }

  // Get Product By Category
  getProductByCategory(category: string) {
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
  }

  // Add New Product
  addNewProduct(product: any) {
    return this.http.post('https://fakestoreapi.com/products', product)
  }

  // Delete Product
  deleteProduct(product: any) {
    return this.http.delete(`https://fakestoreapi.com/products/${product.id}`, {responseType: 'text'})
  }
}
