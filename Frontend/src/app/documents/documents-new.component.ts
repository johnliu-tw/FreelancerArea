import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Document } from './document'
import { Observable } from 'rxjs/Rx';
import { DocumentService } from './document.service';
import {Angular2TokenService} from "angular2-token";



@Component({
	moduleId: module.id,
	selector: 'documents-new',
	templateUrl: 'documents-new.component.html',
	styleUrls: ['documents-new.component.css'],
	providers: [DocumentService]
})
export class DocumentNewComponent{
    document = new Document;
    submitted: boolean = false;


	constructor(
		private documentService: DocumentService,
		private authToken: Angular2TokenService
		){}

	createProposal(document){
		this.submitted = true;
		this.documentService.createDocuments(document)
			.subscribe(
				data => {return true},
				error => {
					console.log("Error saving document");
					return Observable.throw(error);
				}
			);
	}
}
