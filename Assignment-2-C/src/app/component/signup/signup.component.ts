import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  title = 'Project';

  email ="fd";
  password="jhf";

 
  constructor(private router1: Router){ }
  signup()
  {
    
    localStorage.setItem("email",this.email);
    localStorage.setItem("password",this.password);
    this.router1.navigate(['Signin'])
    
   
  }
}
