import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AppLoadingService {
  /*public status: Subject<boolean> = new Subject();
  

  public get active(): boolean {
    return this._active;
  }

  public set active(v: boolean) {
    this._active = v;
    this.status.next(v);
  }*/

  private status = new Subject<boolean>();

  dataString$ = this.status.asObservable();

  displayLoader(data: boolean) {
    this.status.next(data) 
  } 

  public start(): boolean {
    return true; 
  }

  public stop(): boolean {
     return false;
  }

   
}