import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { Proposal } from './proposal'
import { Contents } from '../proposal/contents';
import { ProposalService } from './proposal.service'
import {Angular2TokenService} from "angular2-token";

@Component({
    moduleId: module.id,
    selector: 'proposal-show',
    templateUrl: 'proposal-show.component.html',
    styleUrls: ['proposal-show.component.css'],
    providers: [ProposalService]
})

export class ProposalShowComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private proposalService: ProposalService,
        private http: Http,
        private authToken : Angular2TokenService        
    ){}
	contents: Contents[] = [
        {id:1, value:"除蟲除蟑"},
        {id:2, value:"環境清潔"},
        {id:3, value:"社團庶務"},
        {id:4, value:"佔場排隊"},
        {id:5, value:"網站粉專建置"},
        {id:6, value:"文案美術設計"},
        {id:7, value:"其他"}
    ]
    @Input()
    proposal: Proposal;


    ngOnInit(): void {
        let proposalRequest = this.route.params
            .flatMap((params: Params) =>
            this.proposalService.getProposal(+params['id']));
        proposalRequest.subscribe(response => this.proposal = response.json());
            }
    deleteProposal(proposal){
        this.proposalService.deleteProposal(proposal.id)
            .subscribe(
                data => {return true},
                error => {
                    console.log("Error delete proposal");
                    return Observable.throw(error);
                }
            );
        
    }
    contentFillter(id){
		return this.contents[id].value;
    }      
}