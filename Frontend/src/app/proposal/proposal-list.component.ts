import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService} from './proposal.service';
import {Angular2TokenService} from "angular2-token";



@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css'],
	providers: [ProposalService]
})
export class ProposalListComponent implements OnInit{
	pageTitle: string = "Proposal Dashboard"
	proposals: Proposal[];
	errorMessage: string; 
	mode = "Observable";

	constructor(
		private proposalService: ProposalService,
		private router: Router,
		private authToken: Angular2TokenService
		){}

	ngOnInit(){
		let timer = Observable.timer(0, 1000)
		timer.subscribe(() => this.getProposals());
	}
	getProposals(){
		this.proposalService.getProposals()
			.subscribe(
				proposals => this.proposals = proposals,
				error => this.errorMessage = <any>error
			);
	}
	goToShow(proposal: Proposal): void{
		let link = ['/proposal',proposal.id]
		this.router.navigate(link)
	}
}
