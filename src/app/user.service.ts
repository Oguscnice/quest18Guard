import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from  'rxjs';
import { delay } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  private role : string = "USER";
  
  getRole(): string {
    return this.role
  }

  login(): Observable<boolean>  {
    return of(false).pipe( 
     delay(3000))
  }
}
