import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService} from './proposal.service';


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
		private proposalService: ProposalService
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
}
