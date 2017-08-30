import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,FormGroupDirective } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {ToasterModule, ToasterService} from 'angular2-toaster'; 

import {SlimLoadingBarService,SlimLoadingBarModule} from 'ng2-slim-loading-bar'; 
import { TypeaheadModule } from 'ngx-bootstrap';

//import {SelectModule} from 'ng-select';
  
/**************** Custom module *******************/
import { AppComponent }  from './app.component'; 
import { GlobalService } from './global/global.service'; // common service
import { AuthGuard } from './global/authguard.service';

import {AppLoadingComponent} from './loader/app-loading.component';
import { AppLoadingService } from './loader/app-loading.service';  

import { AppHomeComponent } from './home/app-home.component'; 
import { HomeService } from './home/home.service'; 
     
import { AppTestComponent } from './test/app-test.component'; 
import { TestService } from './test/test.service';  
 
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './header/app-header.component';   
   
import { ConfirmDirective } from './global/confirm.directive';  
import { C0NST } from './constants';
import {HeaderService} from './header/header.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,AppRoutingModule,
                ReactiveFormsModule,ToasterModule,SlimLoadingBarModule,
                TypeaheadModule.forRoot() ],
  declarations: [ AppComponent,
                  AppLoadingComponent,                   
        					AppHeaderComponent, 
        					AppHomeComponent,  
        					AppTestComponent, 
                  ConfirmDirective
  				],                  
  providers:[	GlobalService,HeaderService, 
      			 	HomeService,
      			 	AppLoadingService,  
      			 	AuthGuard,
      			 	TestService,  
      				SlimLoadingBarService,
              FormGroupDirective, 
              AppLoadingComponent,
              AppHomeComponent,
              AppComponent
  			],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
