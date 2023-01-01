import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../servicios/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {
  isLogged=false;
  constructor(private tokenService:TokenService,private router: Router) {    }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.tokenService.getUserName()
    console.log(this.tokenService.getUserName())
    if(this.tokenService.getToken()&& this.tokenService.getUserName()=='patriciaadmin'){
      this.isLogged=true;
      return true;
    }else{
      this.router.navigate(['/intro']);
      this.isLogged=false;
      return false;
      
    }
  }
  
}
