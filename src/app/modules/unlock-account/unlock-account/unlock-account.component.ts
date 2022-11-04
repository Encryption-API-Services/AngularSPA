import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent implements OnInit {
  private apiUrl:string = environment.apiUrl + "UserLogin/UnlockUser";
  private isSubmitting: boolean = true;
  private wasSuccessful: boolean = false;
  constructor(private router: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.activateAccount();
  }

  public activateAccount(): void {
    const body = { id: this.router.snapshot.queryParamMap.get('id') };
    this.http.put(this.apiUrl, body).subscribe(response => {
      this.isSubmitting = false;
      this.wasSuccessful = true;
    }, (error: any) => {
      this.isSubmitting = false;
      this.wasSuccessful = false;
    });
  }
}