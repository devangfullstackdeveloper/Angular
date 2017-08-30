import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster'; 
import {SlimLoadingBarService, SlimLoadingBarComponent} from 'ng2-slim-loading-bar';
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router,private toasterService: ToasterService,private slimLoadingBarService: SlimLoadingBarService) { }
    userInfo:any;
    token:any;
    canActivate() { 
          
    } 

    userLogActivate() { 
        
    }

     getuserLogActivate() { 
        
    }
    
    logout(){
        
    }

    /*subscriptionActivate(){
        
    }*/
}