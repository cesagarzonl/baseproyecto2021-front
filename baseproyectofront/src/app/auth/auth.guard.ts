import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GettokenService } from  '../../service/gettoken.service'
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.gettokenService.isLogin()){
        return true;
      }else{
        return this.router.navigate(['/login']);
      }
  }

  constructor(private gettokenService: GettokenService,    private router:Router) {}
}
