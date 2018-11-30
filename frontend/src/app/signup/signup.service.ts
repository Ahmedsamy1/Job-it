import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp(un: string, pass: string, fn: string, ln: string) {
    return this.http.post('http://localhost:3000/user/createUser',
      {
        userName: un,
        password: pass,
        firstName: fn,
        lastName: ln,
      });
  }
}
