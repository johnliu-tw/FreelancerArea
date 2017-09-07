import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2TokenService } from 'angular2-token';
import { MaterializeModule } from "angular2-materialize";

import { ProfileComponent } from "./profile/profile.component";
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { ProposalService } from './proposal/proposal.service';
import { AuthService } from "./auth-dialog/auth-dialog.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AuthDialogComponent } from "./auth-dialog/auth-dialog.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent,
    AuthDialogComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    MaterializeModule
  ],
  providers: [DocumentService, Angular2TokenService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
