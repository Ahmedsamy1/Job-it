import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  constructor(private auth: AuthService,  private router: Router) { }

  ngOnInit() {
  }
login(event) {
  this.userName = event.srcElement[0].value;
  this.password = event.srcElement[1].value ;
  const user = {
    userName : this.userName,
    password : this.password

   };
  console.log(this.userName, this.password);
  //this.router.navigateByUrl('/home');
this.auth.login(user).subscribe((res) => {
this.auth.user = res ;
this.auth.isloggedin = true;
this.router.navigateByUrl('/home');
});

}

}
