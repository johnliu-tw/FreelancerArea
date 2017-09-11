import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Document } from './document'
import { Observable } from 'rxjs/Rx';
import { DocumentService } from './document.service';
import {Angular2TokenService} from "angular2-token";
import { Contents } from '../proposal/contents';



@Component({
	moduleId: module.id,
	selector: 'documents-new',
	templateUrl: 'documents-new.component.html',
	styleUrls: ['documents-new.component.css'],
	providers: [DocumentService]
})
export class DocumentNewComponent implements OnInit{
    document = new Document;
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
		private documentService: DocumentService,
		private authToken: Angular2TokenService
		){}
    ngOnInit(): void {       
		this.document.owner_email = this.authToken.currentUserData.email
		this.document.contact = this.authToken.currentUserData.email
    }
	createDocument(document){
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
