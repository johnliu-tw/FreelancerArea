import { Component } from '@angular/core';
import { Proposal } from './proposal'


@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']

})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(0,'ABC Company','http://www.google.com','PHP',5,1500,2,'john@gmail.com')
	proposalTwo: Proposal = new Proposal(1,'DDD Company','http://www.google.com','PHP',5,1500,2,'john@gmail.com')
	proposalThree: Proposal = new Proposal(2,'RRR Company','http://www.google.com','PHP',5,1500,2,'john@gmail.com')
	
	proposals: Proposal[] = [this.proposalOne,this.proposalTwo,this.proposalThree]
}