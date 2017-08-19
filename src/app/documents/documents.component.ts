import { Component } from '@angular/core';
import { Document } from './document'

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
  	styleUrls: ['documents.component.css'],
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: "Test",
    		description: "Check",
    		file_url: "www.google.com",
    		updated_at: "2017-08-08",
    		image_url: "https://2.bp.blogspot.com/--A6_TIBMAAk/V03HjisgTbI/AAAAAAAACDI/55o30gg0h8QWP67fUPHI_ASsoWeJBY4jQCLcB/s1600/freelancing.jpg"
		},
		{
			title: "Test2",
    		description: "Check",
    		file_url: "www.google.com",
    		updated_at: "2017-08-08",
    		image_url: "http://freelancer.rapidbusinesslessons.com/wp-content/uploads/2015/12/freelancer-sketch.png"
		},
		{
			title: "Test3",
    		description: "Check",
    		file_url: "www.google.com",
    		updated_at: "2017-08-08",
    		image_url: "http://freelancer.rapidbusinesslessons.com/wp-content/uploads/2015/12/freelancer-sketch.png"
		}
	]
}
