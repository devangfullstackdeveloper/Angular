import { Component,OnInit,OnDestroy } from '@angular/core';
import { AppLoadingService } from './app-loading.service';
import { Subject, Subscription } from 'rxjs/Rx';
 
@Component({
  selector: 'app-loader',
  template: `<div *ngIf="apploader" class="double-bounce-spinner">
  	<img src="./src/app/images/pre-loader.svg"></div>`
})
 
export class AppLoadingComponent implements OnInit { 

	constructor(private spinner: AppLoadingService) {  
		 
	} 
	public apploader: any;
	ngOnInit(){     
		this.apploader = this.spinner.stop(); // or do it on some other event eg: when xmlhttp request completes loading data for the component
	}

	ngOnDestroy(){ 
		this.apploader = this.spinner.start();
	}

	stopLoader(){
		this.apploader = this.spinner.stop();
	}

	startLoader(){
		this.apploader = this.spinner.start();
	} 

}