import { Component } from '@angular/core';
import { Document } from './document'

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: "Test",
    		description: "Check",
    		file_url: "www.google.com",
    		updated_at: "2017-08-08",
    		image_url: "www.yahoo.com"
		},
		{
			title: "Test2",
    		description: "Check",
    		file_url: "www.google.com",
    		updated_at: "2017-08-08",
    		image_url: "www.yahoo.com"
		},
		{
			title: "Test3",
    		description: "Check",
    		file_url: "www.google.com",
    		updated_at: "2017-08-08",
    		image_url: "www.yahoo.com"
		}
	]
}
