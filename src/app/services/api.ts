import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private https: HttpClient) { }

  //get api
  getUser(): Observable<any> {
    return this.https.get(`${this.apiUrl}/posts`);
  }

  getComments(): Observable<any> {
    return this.https.get(`${this.apiUrl}/comments`);
  }

  //post api
  signUp(data: any): Observable<any> {
    return this.https.post(`${this.apiUrl}/users`, data);
  }

    deleteUser(userId: any): Observable<any> {
    return this.https.delete(`${this.apiUrl}/posts/${userId}`);
  }
}
