import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  id: any;
  criteria: any;
  jobs: any = [];
  constructor( private route: ActivatedRoute,
    private router: Router, private http: HttpClient,private spinner: NgxSpinnerService) { }

  ngOnInit() {
   // console.log(this.route.paramMap);
   this.spinner.show();
   this.id = this.route.snapshot.params['id'];

   this.criteria = this.route.snapshot.params['citeria'];
   console.log(this.id);
   console.log(this.criteria);
   this.http.get('https://jobs.github.com/positions.json?search=' + this.criteria).subscribe((data: {}) => {
      console.log(data);
      this.jobs = data;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 900);
    });
  }

}
