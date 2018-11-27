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

  criteria: any = 'node';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('https://jobs.github.com/positions.json?search=node').subscribe((data: {}) => {
      console.log(data);
      this.jobs = data;
    });

  }

search() {
  this.criteria = document.getElementById('1').value;
console.log(this.criteria);
this.http.get('https://jobs.github.com/positions.json?search=' + this.criteria).subscribe((data: {}) => {
      console.log(data);
      this.jobs = data;
    });
}
seemore(jobid) {
  this.router.navigateByUrl('/job/' + jobid + '/' + this.criteria);


}

}
