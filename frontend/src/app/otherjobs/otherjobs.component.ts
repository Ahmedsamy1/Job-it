import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SignupService } from '../signup/signup.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-otherjobs',
  templateUrl: './otherjobs.component.html',
  styleUrls: ['./otherjobs.component.css']
})
export class OtherjobsComponent implements OnInit {
  jobs: any = [];
  pg: any;
  pgs: any ;
  crpg: any;
  criteria: any = 'node';
  loggedin: any = localStorage.getItem('loggedin');
  constructor(private http: HttpClient, private router: Router ,
     private route: ActivatedRoute , private service: SignupService
    ,private spinner: NgxSpinnerService,private ngFlashMessageService: NgFlashMessageService ) { }

  ngOnInit() {
    this.spinner.show();
    this.crpg = this.route.snapshot.params['pg'];

    this.criteria = this.route.snapshot.params['criteria'];
    console.log('cr=' + this.criteria);
    console.log('crpg=' + this.crpg);
    console.log(localStorage.getItem('loggedin'));
    console.log('user =' + localStorage.getItem('user'));
    this.http.get('https://jobs.github.com/positions.json?search=node').subscribe((data: {}) => {
      console.log(data);
      this.jobs = data;
      this.pg = this.jobs.length;
      this.pg = Math.ceil((this.pg / 10));
      console.log(this.pg);
      this.pgs = new Array(this.pg);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1200);
    });

  }

search(event) {
  event.preventDefault();
console.log(event.srcElement[0].value);
  this.criteria = event.srcElement[0].value;

  console.log(this.criteria);
console.log(this.criteria);
this.http.get('https://jobs.github.com/positions.json?search=' + this.criteria).subscribe((data: {}) => {
      console.log(data);
      this.jobs = data;
      this.pg = this.jobs.length;
      this.pg = (Math.floor)(this.pg / 10);
      console.log(this.pg);
    });
}
seemore(jobid) {
  this.router.navigateByUrl('/job/' + jobid + '/' + this.criteria);


}
addseelater(jobid, company_logo , company , title ) {
  this.spinner.show();
  const link = '/job/' + jobid + '/' + this.criteria;
this.service.addseelater(jobid, company_logo , company , title , link).subscribe((data: any) => {
console.log(data);
if (data.message === 'success') {
  this.ngFlashMessageService.showFlashMessage({
    // Array of messages each will be displayed in new line
    messages: ['job added successfully'],
    // Whether the flash can be dismissed by the user defaults to false
    dismissible: true,
    // Time after which the flash disappears defaults to 2000ms
    timeout: 6000,
    // Type of flash message, it defaults to info and success, warning, danger types can also be used
    type: 'alert-sucess'
  });

  }
   else {
    this.ngFlashMessageService.showFlashMessage({
      // Array of messages each will be displayed in new line
      messages: ['job already in see later list'],
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true,
      // Time after which the flash disappears defaults to 2000ms
      timeout: 6000,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'warning'
    });


  }
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 1220);
});


}


}
