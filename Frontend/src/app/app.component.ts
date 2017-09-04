import { Component } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../environments/environment";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id
})
export class AppComponent {
  title = '缺錢者們';
  constructor(private authToken: Angular2TokenService){
    this.authToken.init(environment.token_auth_config);

    this.authToken.signIn({email:"user@example.com", password:"pokemon2"}).subscribe(

      res => {
        console.log('auth response: ', res);
        console.log("auth response headers:", res.headers.toJSON());
        console.log("auth response body:", res.json());
      },

      err => {
        console.log("auth error: ",err);
      }
    )
  }
}
