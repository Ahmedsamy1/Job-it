import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private userName: string = '';
  private password: string = '';
  private firstName: string = '';
  private lastName: string = '';
  successRegister: any ;
  failedRegister: any ;


  constructor(public http: SignupService, private router: Router) {

  }

  ngOnInit() {
  }

  onUserName(event: any) {
    this.userName = event.target.value;
  }

  onPassword(event: any) {
    this.password = event.target.value;
  }

  onFirstName(event: any) {
    this.firstName = event.target.value;
  }

  onLastName(event: any) {
    this.lastName = event.target.value;
  }

  onSignUp(event: any) {
    this.http.signUp(this.userName, this.password, this.firstName, this.lastName).subscribe((res: any) => {
     // console.log(res.status === 'done');
      console.log(res.message);

      if (res.message === 'success') {
        this.successRegister = 'true';
        this.failedRegister = 'false';
        localStorage.setItem('loggedin', 'true');
        localStorage.setItem('user', this.userName);
        window.location.reload();
        this.router.navigateByUrl('/home');

      }
      if (res.message !== 'success') {
        this.successRegister = 'false';
        this.failedRegister = 'true';
      }
    });
  }
}
