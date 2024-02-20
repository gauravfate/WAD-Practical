import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
  constructor(private router: Router){ }
  change()
  {
    this.router.navigate(['Signup'])
  }
  change1()
  {
    this.router.navigate(['Signin'])

  }
}
