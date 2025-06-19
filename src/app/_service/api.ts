import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  private apiUrl2 = 'http://localhost:3000/employees'
  constructor(private https: HttpClient) { }

  //get api
  getUser(): Observable<any> {
    return this.https.get(`${this.apiUrl}/posts`);
  }

  getComments(): Observable<any> {
    return this.https.get(`${this.apiUrl}/comments`);
  }

  //in header
  /*getUserUsingIdInHeader(id: any): Observable<any> {
    const headers = new HttpHeaders({
      userId: id
    });
    return this.https.get(`${this.apiUrl}/posts`, { headers });
  }

  //in path
  getUserUsingIdInPath(id: any): Observable<any> {
    return this.https.get(`${this.apiUrl}/posts/`+id);
  }*/

  //post api
  signUp(data: any): Observable<any> {
    return this.https.post(`${this.apiUrl}/users`, data);
  }

    deleteUser(userId: any): Observable<any> {
    return this.https.delete(`${this.apiUrl}/posts/${userId}`);
  }
  getEmployeeList(){
      return this.https.get(this.apiUrl2);
  }
  addEmployee(data:any){
    return this.https.post(this.apiUrl2,data)
  }

  deleteEmployee(id:any){
    return this.https.delete(`${this.apiUrl2}/${id}`)
  }

  editEmployee(id:any,data:any){
    return this.https.put(`${this.apiUrl2}/${id}`,data);
  }

}
