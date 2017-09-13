import { Component, OnInit, ViewChild,EventEmitter,Output,ElementRef } from '@angular/core';

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
  public margin_top: Number;
  public collapse: Boolean = false;

  @ViewChild('authDialog') authDialog: AuthDialogComponent;
  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  constructor(public authTokenService:Angular2TokenService,public authService:AuthService, private router:Router){   
  }
  ngOnInit(){}

  logOut(){
    this.signedIn = false;
    this.authTokenService.signOut().subscribe(() => this.router.navigate(['/']));
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  lowerContainer(colla){
    console.log(colla)
    if(colla){
      this.margin_top = 10;
      this.collapse = false;
    }
    else{
      this.margin_top = 90;
      this.collapse = true;
    }
  }

  checkSignIn(e){
    if(e.signed){
      this.signedIn = true;
    }
    else{
      this.signedIn = false;
    }
  }
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
      this.margin_top = 10;
    }
  }
  presentAuthDialog(mode?: '登入'| '註冊'){
    this.authDialog.openDialog(mode);
  }
}
