import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

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
  private successRegister: boolean = false;
  private failedRegister: boolean = false;


  constructor(public http: SignupService) {

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

      if (res.status !== 500) {
        this.successRegister = true;
        this.failedRegister = false;
      }
      else {
        this.successRegister = false;
        this.failedRegister = true;
      }
    });
  }
}
