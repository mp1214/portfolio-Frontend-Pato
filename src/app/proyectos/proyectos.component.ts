import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  miPortfolio:any;

  

  constructor(private datosportfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosportfolio.obtenerDatos().subscribe(data =>{
      
      this.miPortfolio=data;
      
  });

}
}
