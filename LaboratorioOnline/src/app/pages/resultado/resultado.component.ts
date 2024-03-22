import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ResultadoService } from '../../service/http/resultadoService';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-resultado',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export default class ResultadoComponen implements OnInit {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  TrusURL: any;
  urlResultado: string = "";
  public resultados:any;

  constructor(private resultadoService : ResultadoService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.resultadoService.obtener().subscribe(
      (response) => {

        this.resultados = response;
        console.log(response);
        console.log( this.resultados);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showModal = false;
  toggleModal(url:string){
    this.urlResultado = url;

    this.TrusURL = this.sanitizer.bypassSecurityTrustUrl(url);
    this.showModal = !this.showModal;
  }

 /* public resultados = [{
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
  ]*/







}
