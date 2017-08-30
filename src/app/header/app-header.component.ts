import { Component } from '@angular/core';   
//import { DatabindingComponent } from '../databinding/databinding.component'; 
import { AuthGuard } from '../global/authguard.service'; 
import { GlobalService } from '../global/global.service';
import { C0NST } from '../constants'; 
import {HeaderService} from './header.service';

@Component({
  	selector: 'header-section',
  	templateUrl: './app.header.html',
  	styleUrls:  C0NST,
})
export class AppHeaderComponent  {  
	onClicked(value:string){
		//alert(value);
	} 
	constructor() { 	      
	    
	}
 
}