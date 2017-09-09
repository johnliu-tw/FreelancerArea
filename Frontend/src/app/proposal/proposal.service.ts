import{Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import{ Proposal } from './proposal';

@Injectable()

export class ProposalService{
    private proposalsUrl='http://localhost:3000/proposals'

    constructor(
        private http: Http
    ){}

    getProposals(): Observable<Proposal[]>{
        return this.http.get(this.proposalsUrl)
                        .map((response: Response) => <Proposal[]>response.json())
                        .catch(this.handleError);
    }
    getProposal(id: number){
        return this.http.get(this.proposalsUrl + "/" + id + '.json')
    }

    createProposal(proposal){
        let headers = new Headers({ 'Content-Type':'application/json' })
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.proposalsUrl, JSON.stringify(proposal), {headers: headers})
                    .map((res: Response) => res.json());
    }
    deleteProposal(id){
        let headers = new Headers({ 'Content-Type':'application/json' })
        let options = new RequestOptions({headers: headers});
        return this.http.delete(this.proposalsUrl + "/" + id, {headers: headers})
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