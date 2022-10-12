import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-fortalezasydebilidades',
  templateUrl: './fortalezasydebilidades.component.html',
  styleUrls: ['./fortalezasydebilidades.component.css']
})
export class FortalezasydebilidadesComponent implements OnInit {
fortalezas:any
debilidades:any
@Input() mje:string=""
  

  constructor(private fortdebilidades:PortfolioService) {}
  


  
  ngOnInit(): void {
    this.fortdebilidades.obtenerDatos().subscribe(data =>{
      this.fortalezas= data.Fortalezas;
      this.debilidades= data.Debilidades;
    
  })
  }
 
}
