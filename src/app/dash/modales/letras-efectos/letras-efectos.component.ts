import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-letras-efectos',
  templateUrl: './letras-efectos.component.html',
  styleUrls: ['./letras-efectos.component.css']
})

export class LetrasEfectosComponent implements OnInit {
efectosList:any

@Input() mje:string=""


  constructor(private letras:PortfolioService) { }

  ngOnInit(): void {
    this.letras.obtenerDatos().subscribe(data =>{
      this.efectosList= data.letrasefecto;
     
    
  })
  }

}
