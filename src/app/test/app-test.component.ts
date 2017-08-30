import { Component,EventEmitter,Output,OnInit,Input } from '@angular/core'; 
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm,FormsModule } from '@angular/forms';    
import { FormGroup,FormBuilder, Validators,FormControl  } from '@angular/forms';
import { AppComponent } from '../app.component'; 
import { ValidationService }       from '../home/validation.service'; 
import { UsernameService } from '../home/username.service';
import { Observable } from 'rxjs/Observable'; 
import { Subject, Subscription } from 'rxjs/Rx'; 
import { Http, Response } from '@angular/http'; 
import { GlobalService } from '../global/global.service'; 
import { AuthGuard } from '../global/authguard.service';  
import { AppHeaderComponent } from '../header/app-header.component'; 
import { TestService } from '../test/test.service'; 
import  {AppHomeComponent} from '../home/app-home.component';
 
import { C0NST } from '../constants';

export interface feedback {
    question_id: number;
    feedbackText: string;
    firstname:any; 
} 
 
@Component({ 
  	templateUrl: './app-test.component.html',
  	styleUrls:  C0NST,   
})
export class AppTestComponent implements OnInit {   
 
	user: FormGroup; 
	@Output() onClose = new EventEmitter(); 
	public category:any;
	private categoryData:any; 
	public isTest:boolean = false; 
 
	constructor(private router: Router,private AppMainComponent: AppComponent,
		private fb: FormBuilder,
		public globalService: GlobalService,
		private testService: TestService,private route: ActivatedRoute,
		private AppHomeComponent: AppHomeComponent 
		/*private modalService: NgbModal*/){  
 	    
	} 

	id:number;
	firstRouteLink:any; 
	routerDiv:any;sub:any;
	feedback: FormGroup;
	questionNumberList:any;
	ngOnInit() { 	
		this.Test();

	} 

	public productIndex:any = 0;
	questionSrNo:number = 1;
    //current:any = this.items[this.productIndex];
    current:any;
    answerId:any="";
    ResultApi:any; 
    qIndex:any;
    testId:any;
    LastProductIndex:any;
    isSkipped:boolean = false; 
    answerShouldBe:boolean = false;
    public getAttemptedQuestionsCount:any;
     
    questionListData:any;
  	 
	nextQuestion(questionId:number){ 		
		if(this.answerId==""){
			this.answerShouldBe = true; 
	        //this.AppMainComponent.popToast('error','Test', "Please choose one answer !");  
			return false;
		}else if(this.answerId != ""){ 
		    this.answerShouldBe = false;
		    this.qIndex = this.productIndex+1; 
		    this.checkForLast(this.questionListData.length,this.qIndex);
		} 		
	}

	public skipQuestionArray:any=[]; 
	skipQuestion(questionId:number){
		this.qIndex = this.productIndex+1; 
		this.checkForLast(this.questionListData.length,this.qIndex);		 
	}

	public flagQuestionArray:any=[];
	flagQuestion(questionId:number){
		this.qIndex = this.productIndex+1;
		this.checkForLast(this.questionListData.length,this.qIndex);		    		 	 
	} 

	finishTest(questionId:number){
		if(this.answerId==""){
			this.answerShouldBe = true; 
	        //this.AppMainComponent.popToast('error','Test', "Please choose one answer !");  
			return false;
		}else if(this.answerId != ""){ 
			this.qIndex = this.productIndex+1; 
			this.checkForLast(this.questionListData.length,this.qIndex);			  
		}
	}

	checkForLast(lengthOfQuestionsList:any,qIndex:any){ 
		if(lengthOfQuestionsList != qIndex){
	    	this.productIndex = this.productIndex+1;
	      	this.current = this.questionListData[this.productIndex];
	      	this.questionSrNo = this.productIndex + 1; 
	      	this.answerId = "";
	    }else{
	    	this.answerId = "";
	    	if(this.isSkipped == true){ 
		    	this.isSkipped = false;
		    	this.AppMainComponent.popToast('success','Back to test', "Back to test !");
		    }else{
		    	this.AppMainComponent.popToast('success','Test', "Test completed successfully!");
			    //console.log("");
			}
		 
			setTimeout(() => {
		    	this.router.navigate(['/home']);
		    }, 2000); 
			
	    }
	}   

	limitQuestion:any="";
	limitExtent:any;
	isPlanSubscribed:any=false;
	isPlanSubscribedData:any;
  	Test() {    
  		this.testService.getJsonFile()
  		.then(Category => {
            this.questionListData = Category;
            if (this.questionListData.STATUS == "1") {
            	this.isTest = true;
	     		this.testId = this.questionListData.RESULT.test_id;
	     		this.questionListData = this.questionListData.RESULT.Lists;
	     		this.current = this.questionListData[0]; 
            }             
        });  		 
  	}   
	 
}