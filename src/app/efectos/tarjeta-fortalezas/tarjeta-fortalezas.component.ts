import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-tarjeta-fortalezas',
  templateUrl: './tarjeta-fortalezas.component.html',
  styleUrls: ['./tarjeta-fortalezas.component.css']
})
export class TarjetaFortalezasComponent implements OnInit {
fortalezas: any;
debilidades:any;

  constructor(private tarjetaFortalezas:PortfolioService) { }

  ngOnInit(): void {
    this.tarjetaFortalezas.obtenerDatos().subscribe(data =>{
      this.fortalezas= data.Fortalezas;
      this.debilidades= data.Debilidades;
    })
  }

}
