import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import {HeaderOuteletComponent}       from '../header/header-outlet.component';
import { AppHeaderComponent }       from '../header/app-header.component'; 
import {ToasterModule, ToasterService} from 'angular2-toaster'; 
import {SlimLoadingBarService,SlimLoadingBarModule} from 'ng2-slim-loading-bar';  
@NgModule({
	imports: [ CommonModule, FormsModule, ToasterModule,SlimLoadingBarModule ],
 
	providers:[ToasterService,SlimLoadingBarService]
})
export class HeaderModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/