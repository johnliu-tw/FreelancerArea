import { Component, OnInit, ViewChild,EventEmitter,Output } from '@angular/core';

import { AuthDialogComponent } from "./auth-dialog/auth-dialog.component";
import { AuthService } from "./auth-dialog/auth-dialog.service";
import { Angular2TokenService } from "angular2-token";
import { environment } from "../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id
})
export class AppComponent implements OnInit {
  signedIn: boolean = false;
  @ViewChild('authDialog') authDialog: AuthDialogComponent;
  constructor(public authTokenService:Angular2TokenService,public authService:AuthService, private router:Router){   
  }
  ngOnInit(){}

  logOut(){
    this.signedIn = false;
    this.authTokenService.signOut().subscribe(() => this.router.navigate(['/']));
  }
  checkSignIn(e){
    if(e.signed){
      this.signedIn = true;
    }
    else{
      this.signedIn = false;
    }
  }
  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);
  }
}
