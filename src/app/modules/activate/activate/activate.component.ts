import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    const body = {
      "id": this.router.snapshot.queryParamMap.get('id')
    }
    this.http.put("/api/UserRegister/Activate/", body).subscribe(response => {
      console.log(response);
    }, (error) => {
      console.error(error);
    });
  }
}