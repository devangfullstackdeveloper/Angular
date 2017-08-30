import {Injectable} from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Subject, Subscription } from 'rxjs/Rx';  
import {GlobalService} from '../global/global.service';
 
export class jsonResponse{}  
 
@Injectable()
export class HeaderService{ 
	Loguser:any;
    currentUser:any;
	constructor(private http: Http,
		private global:GlobalService,   
		private router: Router) {	
		if(localStorage.getItem('currentUser') && localStorage.getItem('token')){
            this.Loguser =  JSON.parse(localStorage.getItem('currentUser'));
            this.currentUser = this.Loguser.loggedUserDetails; 
            //this.token = JSON.parse(localStorage.getItem('token')); 
        } 
    } 

    private headers = new Headers({'Content-Type': 'application/json'}); 
    private options = new RequestOptions({ headers: this.headers }); 
    private apiTempUrl = this.global.apiTempUrl;  // URL to web api
    token:any;  
	getJsonFile():Promise<jsonResponse>{ 
        
        return this.http.get("../../../postman-qplasty.json")
        .toPromise()
        .then(response => response.json() as jsonResponse)
        .catch(this.handleError); 

       
    }

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}
 
}
