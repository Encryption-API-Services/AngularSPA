import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
    ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var token = localStorage.getItem("token");
    if (token !== null) {
      return true;
    }
    this.router.navigate(["/home"]);
    return false;
  }

  public isTokenPresent(): boolean {
    let result: boolean = false;
    let token = localStorage.getItem("token");
    if (token !== null && token !== undefined) {
      result = true;
    }
    return result;
  }

  public removeToken(): void {
    localStorage.removeItem("token");
  }

  public getToken(): any {
    return localStorage.getItem("token");
  }
}
