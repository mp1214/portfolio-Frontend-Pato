import { Component, OnInit } from '@angular/core';
import { Certificado } from 'src/app/model/certificado';
import { persona } from 'src/app/model/persona';
import { CertificadoService } from 'src/app/servicios/certificado.service';


@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})

export class CertificadosComponent implements OnInit {
  certificados: Certificado[]=[];

  constructor(private certifi:CertificadoService) { }
  
  
  ngOnInit(): void {
    this.certifi.lista().subscribe(data =>{
      this.certificados= data;
      
    })
  }

}
