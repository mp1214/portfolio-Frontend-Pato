import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-personal',
  templateUrl: './modal-personal.component.html',
  styleUrls: ['./modal-personal.component.css']
})
export class ModalPersonalComponent implements OnInit {
  telefono: number=0;
  provincia: string="";
  nacimiento: string="";
  estadoCivil: string="";
  mail:string="";

  constructor(private personal:PortfolioService) { }

  ngOnInit(): void {
    this.personal.obtenerDatos().subscribe(data =>{
    this.telefono= data.datosPersonales.telefono;
      this.provincia= data.datosPersonales.provincia;
      this.nacimiento= data.datosPersonales.fechaNacimiento;
      this.estadoCivil=data.datosPersonales.estadoCivil;
      this.mail=data.datosPersonales.mail;
      
    })
  }

}
