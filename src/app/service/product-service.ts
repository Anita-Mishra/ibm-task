import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
      let url="https://random-data-api.com/api/coffee/random_coffee?size=50";
    return this.http.get(url);
  }

}