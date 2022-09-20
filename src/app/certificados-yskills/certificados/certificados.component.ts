import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})

export class CertificadosComponent implements OnInit {
  certificadoList:any;

  constructor(private certificados:PortfolioService) { }
  
  
  ngOnInit(): void {
    this.certificados.obtenerDatos().subscribe(data =>{
      this.certificadoList= data.Certificados;
      
    })
  }

}
