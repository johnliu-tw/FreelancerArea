import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AuthGuard } from "./auth-dialog/auth-dialog.guard";

import {ProfileComponent} from "./profile/profile.component";
import {HomepageComponent} from './homepage/homepage.component';
import {DocumentsComponent} from './documents/documents.component';
import {DocumentNewComponent} from './documents/documents-new.component';
import {ProposalListComponent} from './proposal/proposal-list.component';
import {ProposalNewComponent} from './proposal/proposal-new.component';
import {ProposalShowComponent} from './proposal/proposal-show.component';

const routes: Routes = [ 
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomepageComponent},
    {path:'nuggets', component:DocumentsComponent},
    {path:'nuggets/new', component:DocumentNewComponent},
    {path:'proposal', component:ProposalListComponent},
    {path:'proposal/new', component:ProposalNewComponent},
    {path:'proposal/:id', component:ProposalShowComponent},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}