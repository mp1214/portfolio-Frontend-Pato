import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-certificados',
  templateUrl: './modal-certificados.component.html',
  styleUrls: ['./modal-certificados.component.css']
})
export class ModalCertificadosComponent implements OnInit {
  certificadoList: any;
  @Input() mje:string=""

  constructor(private certificados:PortfolioService) { }

  ngOnInit(): void {
    this.certificados.obtenerDatos().subscribe(data =>{
      this.certificadoList= data.Certificados;
      
    })
  }

}
