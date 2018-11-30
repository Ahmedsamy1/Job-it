import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})
export class AlljobsComponent implements OnInit {
  jobs: any = [];
  pg: any;
  pgs: any ;

  criteria: any = 'node';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('loggedin'));
    console.log('user =' + localStorage.getItem('user'));
    this.http.get('https://jobs.github.com/positions.json?search=node').subscribe((data: {}) => {
      console.log(data);
      this.jobs = data;
      this.pg = this.jobs.length;
      this.pg = Math.ceil((this.pg / 10));
      console.log(this.pg);
      this.pgs = new Array(this.pg);
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


}
