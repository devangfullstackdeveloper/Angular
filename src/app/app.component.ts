import { Component,OnInit,OnDestroy } from '@angular/core'; 
import { ROUTER_CONFIGURATION ,Router} from '@angular/router';
import {ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster'; 
import {AppLoadingComponent} from './loader/app-loading.component';
import { AppLoadingService } from './loader/app-loading.service'; 
import { GlobalService } from './global/global.service';
import { AuthGuard } from './global/authguard.service'; 
import { AppHomeComponent } from './loggin/app-home.component'; 
import { AppHeaderComponent } from './header/app-header.component'; 
import {SlimLoadingBarService, SlimLoadingBarComponent} from 'ng2-slim-loading-bar';
 
 
@Component({ 
  	selector: 'app-root', 
  	templateUrl: `app/home.component.html`,    
})

export class AppComponent{ 
	private toasterService: ToasterService; 
  public apploader: any;
  public userLogActive:boolean;
  public Loguser:any;
  public currentUser:any;
  public avatarUrl:string;
  Isloggedin:any=false;
  degreeList:any;
  fellowList:any;
  occupationList:any;
  regTitle:any;
  globaDatalist:any;

	constructor(toasterService: ToasterService,private spinner: AppLoadingService,
    private appLoadingComponent: AppLoadingComponent,private router:Router,
      
    public globalService:GlobalService,private slimLoadingBarService: SlimLoadingBarService) {
    this.toasterService = toasterService;
    
    if(localStorage.getItem('currentUser')){
      this.Loguser =  JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = this.Loguser.loggedUserDetails; 
    } 
    this.avatarUrl = this.globalService.avatarUrl; 
   
  }

  
 
  public toasterconfig : ToasterConfig = 
  new ToasterConfig({ 
  	mouseoverTimerStop: false,
    showCloseButton: true, 
    tapToDismiss: false,  
    timeout: 5000, 
  }); 
   
  

  popToast(messageType:string,messageTitle:string,messageDetail:string) {
    this.toasterService.pop(messageType, messageTitle, messageDetail);
  }
  

  /*stopLoader(){ 
    this.apploader = this.spinner.stop();
  }

  startLoader(){ 
    this.apploader = this.spinner.start();
  }*/

  startLoader() {
      this.slimLoadingBarService.start(() => { 
          //this.apploader = this.appLoadingComponent.startLoader();
          //console.log('Loading complete');
          this.apploader = true;
      });
  }
  stopLoader() {
      this.slimLoadingBarService.complete();
      //this.apploader = this.appLoadingComponent.stopLoader();
      this.apploader = false;
  }
  /*stopToLoader() {
      this.slimLoadingBarService.stop(() => {
          //console.log('Loading complete');
          this.apploader = false;
      });
  }*/

  
}
 
/*<button (click)="popToast('info','Args Title', 'Args Body')">pop toast</button>*/