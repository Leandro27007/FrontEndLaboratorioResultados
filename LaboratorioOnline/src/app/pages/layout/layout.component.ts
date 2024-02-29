import { Component } from '@angular/core';
import { Router,RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router) {

  }

  logoff() {
    localStorage.removeItem('angular17token')
    this.router.navigateByUrl('/login');
  }

}