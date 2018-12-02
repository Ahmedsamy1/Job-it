import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup/signup.service';
import { ChildActivationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-seelaterjobs',
  templateUrl: './seelaterjobs.component.html',
  styleUrls: ['./seelaterjobs.component.css']
})
export class SeelaterjobsComponent implements OnInit {
  jobs: any = [];
  user: any;
  constructor(public http: SignupService, private router: Router ,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.http.getjobs().subscribe((res: any) => {
  this.jobs = res ;
console.log(this.jobs);


this.user = localStorage.getItem('user');
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 1000);
    });
  }

  seemore(jobid) {
    this.router.navigateByUrl('/' + jobid);
  }

  delete(jobid:any){
console.log(jobid)
this.http.delete(jobid).subscribe((res:any)=>{
  console.log(res);this.ngOnInit();
})

  }

}
