import { Component, OnInit } from '@angular/core';
import { Document } from './document'
import { Observable } from 'rxjs/Rx';
import { DocumentService } from './document.service';
import {Angular2TokenService} from "angular2-token";
import { Contents } from '../proposal/contents';

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
	contentFillter(id){
		return this.contents[id].value;
	}
}
