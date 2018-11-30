import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'frontend';
  logged = localStorage.getItem('loggedin');
  logout() {
localStorage.setItem('loggedin', 'false');
localStorage.removeItem('user');
window.location.reload();
window.location.reload();

this.router.navigateByUrl('/home');


  }

}
