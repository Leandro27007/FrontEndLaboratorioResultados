import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
};

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  menuOpener: boolean = true;
  menuOpenerBtn() {
    this.menuOpener = !this.menuOpener;
  }
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

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Inicio',
      route: 'inicio',
    },
    {
      icon: 'person',
      label: 'Clientes',
      route: 'cliente',
    },
    {
      icon: 'indeterminate_check_box',
      label: 'Marcas',
      route: 'marca',
    },
    {
      icon: 'keyboard_command_key',
      label: 'Modelos',
      route: 'modelo',
    },
    {
      icon: 'dynamic_form',
      label: 'Vehiculos',
      route: 'vehiculo',
    },
    {
      icon: 'select_all',
      label: 'Solicitud de Prestamo',
      route: 'solicitudPrestamo',
    }
  ]);
}
