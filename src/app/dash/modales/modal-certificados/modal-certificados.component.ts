import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-certificados',
  templateUrl: './modal-certificados.component.html',
  styleUrls: ['./modal-certificados.component.css']
})
export class ModalCertificadosComponent implements OnInit {
  certificadoList: any;

  constructor(private certificados:PortfolioService) { }

  ngOnInit(): void {
    this.certificados.obtenerDatos().subscribe(data =>{
      this.certificadoList= data.Certificados;
      
    })
  }

}
