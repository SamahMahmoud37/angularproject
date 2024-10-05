import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  //private apiUrl = 'https://api.example.com/items'; // Replace with your API URL
apiUrl = "https://api.escuelajs.co/api/v1/"
  constructor(private http: HttpClient) { }
  getFakeData() {
    // return [
    //   { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    //   { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    //   { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
    // ];
    //return this.http.get('https://freeapi.miniprojectideas.com/api/JWT/GetAllTaskList');
    //return this.http.get('https://freeapi.miniprojectideas.com/api/miniproject/GetAllProjects');
    return this.http.get(`${this.apiUrl}products`)
    
 }

  getAllProducts() {
    return this.http.get(`${this.apiUrl}products`)
  }
  getAllUsers() {
    return this.http.get(`${this.apiUrl}users`)
  }
  getSingleUser(id: any) {
    return this.http.get(`${this.apiUrl}users/${id}`)
  }
  createUser(obj: any) {
    debugger;
    return this.http.post(`${this.apiUrl}users`, obj)
  }
  updateSingleUser(id: any, obj: any) {
    return this.http.put(`${this.apiUrl}users/${id}`, obj)
  }
  deleteProduct(id: any) {
    return this.http.delete(`${this.apiUrl}products/${id}`)
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.apiUrl}users/${id}`)
  }
}
