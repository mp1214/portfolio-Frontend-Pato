import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  constructor(private experiencia:PortfolioService) { }

  ngOnInit(): void {
    this.experiencia.obtenerDatos().subscribe(data =>{
      this.experienciaList= data.experiencia;
  })

}
}