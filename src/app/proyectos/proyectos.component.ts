import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 proyectos: Proyecto[]=[];

  

  constructor(private proyectoS:ProyectoService) { }

  ngOnInit(): void {
    this.proyectoS.lista().subscribe(data =>{
      
      this.proyectos=data;
      
  });

}
}
