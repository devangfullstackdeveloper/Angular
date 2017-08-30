import {Injectable} from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable,Subject, Subscription} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router'; 
 

// define interfaces of getting data
export class currentUser { }
export class degreeList { }
export class fellowList { }
 

@Injectable()
export class GlobalService{
	private headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer ' }); 
    private options = new RequestOptions({ headers: this.headers });
  	public appUrl = 'http://172.16.16.187/qplasty/';  // URL to web api 
  	  
	public apiTempUrl = this.appUrl+'api/';  // URL to web api 
	public currentUser:any;
	public avatarUrl:any;
	public UserProfileUrl:any;
	Loguser:any;
	token:any;
	public questionImages:any;
	 
	constructor(private http: Http, 
        private router: Router) { 
		this.avatarUrl = this.appUrl+'public/asset/user/avatar.jpg';
		this.UserProfileUrl = this.appUrl+'public/asset/user/';
		this.questionImages = this.appUrl+'public/asset/question_images/';
		//this.getHeader();		
	}  

	getHeader(){
		if(localStorage.getItem('currentUser') && localStorage.getItem('token')){
			this.Loguser =  JSON.parse(localStorage.getItem('currentUser'));
			this.currentUser = this.Loguser.loggedUserDetails; 
			this.token =  JSON.parse(localStorage.getItem('token'));
		} 
		this.headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer ' + this.token}); 
    	this.options = new RequestOptions({ headers: this.headers }); 
	}

	 

	 
	 
	 

	goToTop(){
		document.body.scrollTop = document.documentElement.scrollTop = 50; 
        return false;
	}

 	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	  }
}
