import { Component, OnInit } from '@angular/core';
import SuccessfulLogins from 'src/app/models/SuccessfulLogins';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-successful-logins',
  templateUrl: './successful-logins.component.html',
  styleUrls: ['./successful-logins.component.css']
})
export class SuccessfulLoginsComponent implements OnInit {
  public successfulLogins: SuccessfulLogins[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getSuccessfulLogins();
  }

  public getSuccessfulLogins(): void {
    this.http.getAuthenticated(environment.apiUrl + "UserLogin/GetSuccessfulLogins").subscribe((response: any) => {
      this.successfulLogins = response.logins;
    }, (error) => {

    });
  }

  public handleWasThisMe(wasThisMe: boolean, loginId: string): void {
    this.removeLoginFromDomList(loginId);
  }

  private removeLoginFromDomList(loginId: string): void {
    for (let i = 0; i < this.successfulLogins.length; i++) {
      if (this.successfulLogins[i].id === loginId) {
        this.successfulLogins.splice(i, 1);
        break;
      }
    }
  } 
}
