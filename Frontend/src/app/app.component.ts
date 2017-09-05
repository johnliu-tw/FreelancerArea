import { Component, OnInit, ViewChild,EventEmitter,Output } from '@angular/core';

import { AuthDialogComponent } from "./auth-dialog/auth-dialog.component";
import { Angular2TokenService } from "angular2-token";
import { environment } from "../environments/environment";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id
})
export class AppComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;
  constructor(public tokenAuthSerivce: Angular2TokenService){   
    this.tokenAuthSerivce.init(environment.token_auth_config);
  }
  ngOnInit(){}

  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);
  }
}
