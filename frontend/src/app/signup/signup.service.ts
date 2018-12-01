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
getjobs() {

    return this.http.get('http://localhost:3000/user/alljobs');

}

addseelater(id: any, cr: any , comp: any , t: any , l: any ) {

  return this.http.post('http://localhost:3000/user/createjob', {username: localStorage.getItem('user'), jobid: id , company_logo: cr
, company: comp , title : t , link: l

});

}

}
