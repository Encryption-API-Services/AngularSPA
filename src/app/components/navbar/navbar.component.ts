import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { NavbarEmitterService } from 'src/app/services/navbar-emitter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isUserLoggedIn: boolean = false;

  constructor(
    private navbarEmitter: NavbarEmitterService,
    private authGuard: AuthGuardService
    ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.checkIfUserIsLoggedIn();
    this.subscribeTooEmitter();
  }

  private checkIfUserIsLoggedIn(): boolean {
    let result = false;
    result = this.authGuard.isTokenPresent();
    return result;
  }

  private subscribeTooEmitter(): void {
    this.navbarEmitter.emitter.subscribe((response: any) => {
      if (response === "user-logged-in") {
        this.isUserLoggedIn = true;
      }
    }, (error) => {

    });
  }

  public logOut(): void {
    this.isUserLoggedIn = false;
    this.authGuard.removeToken();
  }

}
