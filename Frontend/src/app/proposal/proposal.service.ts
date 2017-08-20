import{Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import{ Proposal } from './proposal';

@Injectable()

export class ProposalService{
    private proposalsUrl='http://localhost:3000/proposals.json'

    constructor(
        private http: Http
    ){}

    getProposals(): Observable<Proposal[]>{
        return this.http.get(this.proposalsUrl)
                        .map((response: Response) => <Proposal[]>response.json())
                        .catch(this.handleError);
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