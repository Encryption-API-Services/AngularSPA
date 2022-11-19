import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwt_decode from "jwt-decode";

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

  public getDecodedToken(): any {
    let decodedToken;
    let storageToken = this.getToken();
    if (storageToken !== null) {
      decodedToken = jwt_decode(storageToken);
    }
    return decodedToken;
  }
}
