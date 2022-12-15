import { Component, OnInit,Input } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
descripcion: persona[]=[];
descrip:persona|any=null;
@Input() mje:string=""

  constructor(private acercademi:PersonaService) { }
 
  
  ngOnInit(): void {
    this.cargarPersona();
    }
    cargarPersona(){
      this.acercademi.detail(1).subscribe(data=>{
        this.descrip=data;
       
      })
    }
 
  cargarDescrip():void{
    this.acercademi.lista().subscribe(data =>{this.descripcion= data; })
  
  }
  OnUpdate(id?:number):void{
    // this.ids!=id;
     // const id=this.activatedRouter.snapshot.params['id'];
      if(id != undefined){
         this.acercademi.update(id,this.descrip).subscribe(data=>{
          alert("Descripción modificada"); 
          this.cargarDescrip();
      },err =>{
        alert("Error al modificar Descripción");
        
      })
    }
    
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.acercademi.detail(id).subscribe(data=>{
      this.descrip=data;
  
    },err=>{
      alert("error al modificar");
    })
  }
}
  borrar(id?:number){
    if(id != undefined){
      this.acercademi.delete(id).subscribe(data =>{
       this.cargarDescrip();
        alert("se pudo eliminar satisfactoriamente");
        this.cargarDescrip();
      },err =>{
        alert("No se pudo eliminar");
      })
    }
   
  }
}
