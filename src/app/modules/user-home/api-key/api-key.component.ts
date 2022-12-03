import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent implements OnInit {
  public apiKey: string = "";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getApiKey();
  }


  private getApiKey(): void {
    this.httpService.getAuthenticated(environment.apiUrl + "UserLogin/GetApiKey").subscribe((response: any) => {
      this.apiKey = response.apiKey;
    }, (error) => {

    });
  }
}
