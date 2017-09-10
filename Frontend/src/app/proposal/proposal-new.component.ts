import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { Contents } from './contents';
import { ProposalService} from './proposal.service';
import {Angular2TokenService} from "angular2-token";

@Component({
    moduleId: module.id,
    selector: 'proposal-new',
    templateUrl: 'proposal-new.component.html',
    styleUrls: ['proposal-new.component.css'],
    providers: [ProposalService]
})

export class ProposalNewComponent implements OnInit{
    proposal = new Proposal;
    submitted: boolean = false;
    contents: Contents[] = [
        {id:1, value:"除蟲除蟑"},
        {id:2, value:"環境清潔"},
        {id:3, value:"社團庶務"},
        {id:4, value:"佔場排隊"},
        {id:5, value:"網站粉專建置"},
        {id:6, value:"文案美術設計"},
        {id:7, value:"其他"}
    ]
    constructor(
        private proposalService: ProposalService,
        private authToken: Angular2TokenService
    ){
        console.log(authToken)
    }
    ngOnInit(): void {       
        this.proposal.owner_email = this.authToken.currentUserData.email
        console.log(this.authToken.currentUserData.email)
    }
    createProposal(proposal){
        this.submitted = true;
        this.proposalService.createProposal(proposal)
            .subscribe(
                data => {return true},
                error => {
                    console.log("Error saving proposal");
                    return Observable.throw(error);
                }
            );
    }

}
