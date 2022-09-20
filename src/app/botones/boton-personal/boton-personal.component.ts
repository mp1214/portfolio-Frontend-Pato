import { Component, OnInit } from '@angular/core';

import { VirtualTimeScheduler } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-boton-personal',
  templateUrl: './boton-personal.component.html',
  styleUrls: ['./boton-personal.component.css']
})
export class BotonPersonalComponent implements OnInit {
telefono: number=0;
provincia: string="";
nacimiento: string="";
estadoCivil: string="";

  constructor(private personal:PortfolioService) { }

  ngOnInit(): void {
    this.personal.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.telefono= data.datosPersonales.telefono;
      this.provincia= data.datosPersonales.provincia;
      this.nacimiento= data.datosPersonales.fechaNacimiento;
      this.estadoCivil=data.datosPersonales.estadoCivil;
  })

}
}
