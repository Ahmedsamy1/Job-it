import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AlljobsComponent} from './alljobs/alljobs.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './job/job.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {AuthService} from './auth.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent ,  canActivate: [AuthGuard] },
  {path: 'signup', component: SignupComponent , canActivate: [AuthGuard]},
  {path: 'home', component: AlljobsComponent},
  {path: 'job/:id/:citeria', component : JobComponent},
  {path: '', redirectTo: 'home' , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AlljobsComponent,
    JobComponent,


  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule ,  NgFlashMessagesModule.forRoot() ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
