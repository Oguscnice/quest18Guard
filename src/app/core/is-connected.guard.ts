import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class IsConnectedGuard {
  constructor(private router: Router, public user: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //
    if (this.user.getRole() == 'ADMIN' || this.user.getRole() == 'USER') {
      return true;
    } else {
      // this.router.navigate(['/notsecured']);
      return this.user.login();;
    }
  }
}
