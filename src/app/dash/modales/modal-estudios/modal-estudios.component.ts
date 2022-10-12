import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css']
})
export class ModalEstudiosComponent implements OnInit {
  titulo:string=""
  inicio:string=""
  fin:string=""
  institucion:string=""
  tipoeducacion:string=""
  icono:string=""
  estudios:any

  @Input() mje:string=""

  constructor(private estudio:PortfolioService) { }

  ngOnInit(): void {
    this.estudio.obtenerDatos().subscribe(data =>{
      this.titulo= data.titulo;
      this.inicio= data.inicio;
      this.fin= data.fin;
      this.institucion= data.institucion;
      this.icono= data.icono;
      this.tipoeducacion= data.tipoeducacion;
      this.estudios= data.educacion;
  })
  }

}
