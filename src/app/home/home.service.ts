import {Injectable} from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Subject, Subscription } from 'rxjs/Rx'; 
import { User } from './user';
import {GlobalService} from '../global/global.service';

export class isloggedinstatus{
	isloggedinstatus:any;
}


@Injectable()
export class HomeService{ 
	constructor(private http: Http,
		private router: Router) {	
		 
    }  

	private headers = new Headers({'Content-Type': 'application/json'}); 
    private options = new RequestOptions({ headers: this.headers }); 
	 
 	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}
}
