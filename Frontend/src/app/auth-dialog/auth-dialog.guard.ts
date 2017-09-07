import { Injectable }     from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {Angular2TokenService} from "angular2-token";
import { AppComponent } from "../app.component";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authTokenService:Angular2TokenService,
              private router:Router,
              private appComponent: AppComponent ){}

  canActivate() {
      console.log(this.authTokenService)
    if(this.authTokenService.userSignedIn()){
      return true;
    }else{
      this.router.navigateByUrl('/home');
      return false;
    }
  }

}