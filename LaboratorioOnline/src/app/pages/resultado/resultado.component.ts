import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export default class ResultadoComponent {

  public resultados = [{
    cliente: "Leandro Batista",
    fechaResultado: "27/08/2000",
    Bioanalista: "Rosaura",
  },
  {
    cliente: "Leandro Batista",
    fechaResultado: "30/04/2000",
    Bioanalista: "Rosa",
  },
  {
    cliente: "Leandro Batista",
    fechaResultado: "07/12/2000",
    Bioanalista: "Estephanie",
  }
  ]







}
