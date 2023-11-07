import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login() {
    let url = `http://localhost:3000/users`
    return this.http.get(url)
  }

  getListing() {
    let url = `http://localhost:3000/listings`
    return this.http.get(url)
  }

  getItem(id:string) {
    let url = `http://localhost:3000/item/${id}`
    return this.http.get(url)
  }


}
