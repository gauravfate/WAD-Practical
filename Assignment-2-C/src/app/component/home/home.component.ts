import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Project';
  constructor(private router: Router){ }
  change()
  {
    this.router.navigate(['/'])
  }
  change1()
  {
    this.router.navigate(['Signin'])

  }
}
