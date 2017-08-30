import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import {HeaderOuteletComponent}       from '../header/header-outlet.component';  
import {AppHeaderComponent}       from '../header/app-header.component';  

const headerroutes: Routes = [ 
  	{ 
	  	path: '',
	    component: AppHeaderComponent,
	    /*children: [
	      { path: 'header', component: AppHeaderComponent } 
	    ]*/
  	} 
];

@NgModule({
  imports: [RouterModule.forChild(headerroutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/