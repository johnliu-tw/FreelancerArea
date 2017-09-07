import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import {Router} from "@angular/router";
import {AuthService} from "../auth-dialog/auth-dialog.service";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService,
              public authService:AuthService,
              private router:Router,
              private appComponent: AppComponent) {}

  logOut(){
    this.appComponent.signedIn = false;
    this.authService.logOutUser().subscribe(() => this.router.navigateByUrl('/home'));
  }

  ngOnInit() {
  }

}