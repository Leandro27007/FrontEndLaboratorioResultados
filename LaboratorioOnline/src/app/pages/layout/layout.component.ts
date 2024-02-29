import { Component} from '@angular/core';
import { Router,RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router) {
  }
  showMenu: boolean = false;

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


  logoff() {
    localStorage.removeItem('angular17token')
    this.router.navigateByUrl('/login');
  }

}
