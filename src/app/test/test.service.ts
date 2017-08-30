import { Injectable,Compiler } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs/Rx'; 

 
import { GlobalService } from '../global/global.service';
import { AppTestComponent } from '../test/app-test.component'; 
export class Category{} 
export class Questions{}
export class jsonResponse{}

@Injectable()
export class TestService{
    Loguser:any;
    currentUser:any;
    constructor(
        private _compiler: Compiler,
        private http: Http, 
        private global:GlobalService,
        private router: Router) { 
        if(localStorage.getItem('currentUser') && localStorage.getItem('token')){
             
            this.headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer ' }); 
            this.options = new RequestOptions({ headers: this.headers }); 
            console.log(''); 
        }
        this._compiler.clearCache();
        //console.log(localStorage.getItem('token') + " TET "+ this.authenticationService.getToken());
    }
 

    private headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer ' }); 
    private options = new RequestOptions({ headers: this.headers });  
    token:any;  

    getJsonFile():Promise<jsonResponse>{        
        return this.http.get("../../../Questionnaires.json")
        .toPromise()
        .then(response => response.json() as jsonResponse)
        .catch(this.handleError);        
    }
     
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    
}