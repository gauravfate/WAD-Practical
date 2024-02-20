import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private router: Router){ }
email="";
password=""
 
 email1 = localStorage.getItem("email");
  password1 =localStorage.getItem("password");
   
  login()
  {
    if(this.email == this.email1 && this.password==this.password1)
    {
      this.router.navigate(['/Home'])
    }
    else{
      alert("Invalid credentials");
    }
  }


}
