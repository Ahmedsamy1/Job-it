import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup/signup.service';
import { ChildActivationEnd } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seelaterjobs',
  templateUrl: './seelaterjobs.component.html',
  styleUrls: ['./seelaterjobs.component.css']
})
export class SeelaterjobsComponent implements OnInit {
  jobs: any = [];
  user: any;
  constructor(public http: SignupService, private router: Router) { }

  ngOnInit() {
    this.http.getjobs().subscribe((res: any) => {
  this.jobs = res ;
console.log(this.jobs);

this.user = localStorage.getItem('user');
    });
  }

  seemore(jobid) {
    this.router.navigateByUrl('/' + jobid);
  }

}
