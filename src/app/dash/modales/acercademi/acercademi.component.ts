import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
descripcion: string =""
@Input() mje:string=""

  constructor(private acercademi:PortfolioService) { }

  ngOnInit(): void {
    this.acercademi.obtenerDatos().subscribe(data =>{
      this.descripcion= data.acercaDeMi.descripcion;
  })
  }
}
