import { Component,OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { NgForm } from '@angular/forms';    
import { FormGroup,FormBuilder, Validators,FormControl  } from '@angular/forms'; 
import { ValidationService }       from '../loggin/validation.service'; 
import { UsernameService } from '../loggin/username.service';
import { Observable } from 'rxjs/Observable'; 
import { Subject, Subscription } from 'rxjs/Rx'; 
import { Http, Response } from '@angular/http';
import { AppComponent } from '../app.component'; 
import { HomeService }       from '../loggin/home.service';
import { AuthGuard } from '../global/authguard.service';
import { AppLoadingService } from '../loader/app-loading.service';
import { AppHeaderComponent } from '../header/app-header.component';
        
 
export interface User { 
    email: string;
    password: string; 
}

@Component({ 
	'selector':'logout-section',
  	templateUrl: './app-home.html' 
})
export class AppHomeComponent implements OnInit { 
	/*public user:User;*/  
	user: FormGroup;
	public values:string;	 
	//public items:any=false;
	private value={}; 
	private id:number;  
	private sub:any;
	private verificationNumber:string;
	private routerDiv:any;
	private firstRouteLink:string;
	apploader:any=false;

	 
	
	ngOnInit() {
		  
		 
	}
	userLogActive:any; 
 
    multiple0: boolean = false;
    multiple1: boolean = true;
    options0: Array<any> = [];
    options1: Array<any> = [];
    selection: Array<string>;

    
    logSingleString: string = '';
    logMultipleString: string = '';
    mySelectValue;

	constructor(){  
		 
	}  
 
}