import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(data:any) {}

  getListing() {
    let url = `http://localhost:3000/listing`
  }

  getItem(id:string) {}

  
}
