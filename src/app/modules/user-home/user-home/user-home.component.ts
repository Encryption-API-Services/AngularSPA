import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  private apiUrl: string = environment.apiUrl + "TwoFA/Get2FAStatus";
  public is2FAOn: boolean = false;

  public phone2FAForm: FormGroup =  this.formBuilder.group({
    phoneNumber: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {
    this.GetPhone2FASettings();
  }

  private GetPhone2FASettings(): void {
    this.http.getAuthenticated(this.apiUrl).subscribe((response: any) => {
      this.is2FAOn = response.result;
    }, (error) => {
      this.is2FAOn = false;
    });
  }
}
