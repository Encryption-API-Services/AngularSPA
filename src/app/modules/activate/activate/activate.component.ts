import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  private apiUrl: string = environment.apiUrl + "UserRegister/Activate";
  public isAuthenticating: boolean = false;
  public wasSuccessful: boolean = false;

  constructor(
    private router: ActivatedRoute, 
    private http: HttpService, 
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Activate User | Encryption API Services");
    this.isAuthenticating = true;
    const body = {
      "id": this.router.snapshot.queryParamMap.get('id'),
      "token": this.router.snapshot.queryParamMap.get('token'),
    }
    this.http.put(this.apiUrl, body).subscribe(response => {
      this.wasSuccessful = true;
      this.isAuthenticating = false;
    }, (error) => {
      this.wasSuccessful = false;
      this.isAuthenticating = false;
      console.error(error);
    });
  }
}