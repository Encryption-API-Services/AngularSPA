import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from 'src/app/validators/form-validators';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

  
}
