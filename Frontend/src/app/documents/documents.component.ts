import { Component, OnInit } from '@angular/core';
import { Document } from './document'
import { Observable } from 'rxjs/Rx';
import { DocumentService } from './document.service';
import {Angular2TokenService} from "angular2-token";

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
  	styleUrls: ['documents.component.css'],
	providers: [DocumentService]
})
export class DocumentsComponent implements OnInit{
	pageTitle: string = "找錢者們"
	documents: Document[];
	errorMessage: string; 
	mode = "Observable";

	constructor(
		private documentService: DocumentService,
		private authToken: Angular2TokenService
		){}

	ngOnInit(){
		let timer = Observable.timer(0, 1000)
		timer.subscribe(() => this.getDocuments());
	}
	getDocuments(){
		this.documentService.getDocuments()
			.subscribe(
				documents => this.documents = documents,
				error => this.errorMessage = <any>error
			);
	}
}
