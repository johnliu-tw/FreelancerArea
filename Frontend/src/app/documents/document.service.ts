import{Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import{ Document } from './document';

@Injectable()

export class DocumentService{
    private documentUrl='http://localhost:3000/freelance_documents.json'

    constructor(
        private http: Http
    ){}

    getDocuments(): Observable<Document[]>{
        return this.http.get(this.documentUrl)
                        .map((response: Response) => <Document[]>response.json())
                        .catch(this.handleError);
    }
    getDocument(id: number){
        return this.http.get(this.documentUrl + "/" + id + '.json')
    }
    createDocuments(document){
        let headers = new Headers({ 'Content-Type':'application/json' })
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.documentUrl, JSON.stringify(document), {headers: headers})
                    .map((res: Response) => res.json());
    }
    deleteDocuments(id){
        let headers = new Headers({ 'Content-Type':'application/json' })
        let options = new RequestOptions({headers: headers});
        return this.http.delete(this.documentUrl + "/" + id, {headers: headers})
                    .map((res: Response) => res.json());
    }
    private handleError (error:Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
}
