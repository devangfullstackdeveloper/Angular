import {Component,Input,Directive, ElementRef, Renderer,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {
    @HostListener('submit', ['$event.target'])
    onsubmit(e){ 
    	let firstInvalid = this.elem.nativeElement.querySelector('.ng-invalid'); 
    	if(firstInvalid) {
	        firstInvalid.focus();
	    }
    }  
  	constructor(public elem: ElementRef, renderer: Renderer) {
  		//console.log(this.elem.nativeElement.input);
       //renderer.setElementStyle(this.elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    } 
}