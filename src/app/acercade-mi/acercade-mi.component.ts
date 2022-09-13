import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercade-mi',
  templateUrl: './acercade-mi.component.html',
  styleUrls: ['./acercade-mi.component.css']
})
export class AcercadeMiComponent implements OnInit {
  AboutMe: any;
  constructor(private acercaDeMi:PortfolioService) { }

  ngOnInit(): void {
    this.acercaDeMi.obtenerDatos().subscribe(data =>{
      this.AboutMe= data.acercaDeMi;
    })
  }

}
