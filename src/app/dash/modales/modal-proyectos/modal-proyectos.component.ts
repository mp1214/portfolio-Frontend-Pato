import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {
  proyectoList: any;
  @Input() mje:string=""

  constructor(private proyectos:PortfolioService) { }

  ngOnInit(): void {
    this.proyectos.obtenerDatos().subscribe(data =>{
      this.proyectoList= data.proyectos;
      
    })
  }

}
