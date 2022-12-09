import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { persona } from 'src/app/model/persona';
@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.component.html',
  styleUrls: ['./fotoperfil.component.css']
})
export class FotoperfilComponent implements OnInit {
  Perfil:persona|any=null;
  fotos:persona[]=[];
  img:string="";
  constructor(private banerDatos:PersonaService) { }
  
  ngOnInit(): void {
   
    this.banerDatos.lista().subscribe(data =>{
      this.Perfil= data; 
      console.log(this.Perfil[0].img);
    })
    }
   

}