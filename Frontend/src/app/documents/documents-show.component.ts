import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { Document } from './document'
import { DocumentService } from './document.service'
import {Angular2TokenService} from "angular2-token";

@Component({
    moduleId: module.id,
    selector: 'documents-show',
    templateUrl: 'documents-show.component.html',
    styleUrls: ['documents-show.component.css'],
    providers: [DocumentService]
})

export class ProposalShowComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private documentService: DocumentService,
        private http: Http,
        private authToken : Angular2TokenService        
    ){}

    @Input()
    document: Document;


    ngOnInit(): void {
        let documentRequest = this.route.params
            .flatMap((params: Params) =>
            this.documentService.getDocument(+params['id']));
            documentRequest.subscribe(response => this.document = response.json());
            }
    deleteProposal(proposal){
        this.documentService.deleteDocuments(proposal.id)
            .subscribe(
                data => {return true},
                error => {
                    console.log("Error delete document");
                    return Observable.throw(error);
                }
            );
        
    }        
}