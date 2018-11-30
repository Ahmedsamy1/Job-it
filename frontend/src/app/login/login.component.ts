import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  constructor(private auth: AuthService,  private router: Router, private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
    console.log(localStorage.getItem('loggedin'));
  }
login(event) {
  this.userName = event.srcElement[0].value;
  this.password = event.srcElement[1].value ;
  const user = {
    userName : this.userName,
    password : this.password

   };
 // console.log(this.userName, this.password);

this.auth.login(user).subscribe((res) => {
console.log(res);
if (res.message === 'success') {
  this.auth.user = res ;
  this.auth.isloggedin = true;
  console.log(this.auth.user);
  localStorage.setItem('loggedin', 'true');
console.log(localStorage.getItem('loggedin'));
this.router.navigateByUrl('/home');
} else {
  this.ngFlashMessageService.showFlashMessage({
    // Array of messages each will be displayed in new line
    messages: ['username or password are incorrect'],
    // Whether the flash can be dismissed by the user defaults to false
    dismissible: true,
    // Time after which the flash disappears defaults to 2000ms
    timeout: false,
    // Type of flash message, it defaults to info and success, warning, danger types can also be used
    type: 'danger'
  });

}

//this.router.navigateByUrl('/home');
});

}

}
