import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.component.html',
  styleUrls: ['./fotoperfil.component.css']
})
export class FotoperfilComponent implements OnInit {
  Perfil:any;
  constructor(private banerDatos:PortfolioService) { }
  
  ngOnInit(): void {
    this.banerDatos.obtenerDatos().subscribe(data =>{
      this.Perfil= data.banner;
    })
    }
  }