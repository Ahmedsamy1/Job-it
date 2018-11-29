import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: any = null;
isloggedin: Boolean = false;
readonly baseURL = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post('http://localhost:3000/user/login', user);
    }
  }

