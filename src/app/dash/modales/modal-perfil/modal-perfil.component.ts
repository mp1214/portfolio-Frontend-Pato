import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.css']
})
export class ModalPerfilComponent implements OnInit {
fotoperfil:any;
  constructor(private foto:PortfolioService) { }

  ngOnInit(): void {
    this.foto.obtenerDatos().subscribe(data =>{
      this.fotoperfil= data.banner.imagenperfil;
      
    })
  }

}
