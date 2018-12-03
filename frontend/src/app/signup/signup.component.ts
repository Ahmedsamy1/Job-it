import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { NgxSpinnerService } from 'ngx-spinner';
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


  constructor(public http: SignupService, private router: Router,
     private ngFlashMessageService: NgFlashMessageService,private spinner: NgxSpinnerService) {

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
    this.spinner.show();
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
        if(this.userName==='' || this.password==''){
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 1000);
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ['please make sure to enter username and password'],
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true,
          // Time after which the flash disappears defaults to 2000ms
          timeout: false,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'danger'
        });
      }else{
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ['please choose another username'],
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true,
          // Time after which the flash disappears defaults to 2000ms
          timeout: false,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'danger'
        });

      }
      }
    });
  }
}
