import { Component, OnInit,Input } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {
 
  @Input() mje:string="";
  proyectoList: Proyecto[]=[];
  img:string="";
  path:string="";
  proyec:Proyecto|any=null;
  proyecto:string=""
  id:number=0;
  completo:boolean=false;
 
  constructor(private proyectos:ProyectoService,private imageService:ImageService) { }

  ngOnInit(): void {
    this.proyectos.lista().subscribe(data =>{
      this.proyectoList= data;
      
    })
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.proyectos.detail(id).subscribe(data=>{
      this.proyec=data;
    },err=>{
      alert("error al modificar");
    })
  }
  }
  cargarProyecto():void{
    this.proyectos.lista().subscribe(data =>{this.proyec=data;})
    
  }
  borrar(id?:number){
    if(id != undefined){
      this.proyectos.delete(id).subscribe(data =>{
        this.cargarProyecto();
        alert("se pudo eliminar satisfactoriamente");
      },err =>{
        alert("No se pudo eliminar");
      })
    }
  }
  OnCreate():void{
    // this.habilidad.icono = this.imageService.url;
   //this.completo= this.imageService.completed[ this.imageService.completed.length-1];
    this.img= this.imageService.url[this.imageService.url.length-1]
   console.log( this.img)
     const habi= new Proyecto(this.proyecto,this.path,this.img)
    
     this.proyectos.save(habi).subscribe(data=>{
       alert("Proyecto añadido");
       
     },err=>{
       alert("Fallo al añadir");
     })
     
   }
  OnUpdate(id?:number):void{
    //this.completo= this.imageService.completed[ this.imageService.completed.length-1];
      if(id != undefined){
          this.proyectos.update(id,this.proyec).subscribe(data=>{
          alert("certificado modificado"); 
          this.cargarProyecto();
      },err =>{
        alert("Error al modificar certificado");
        
      })
    }
  }
  uploadImage($event:any){
    
    // const name="proyect_"+ this.proyec.id;
     this.imageService.uploadImage($event,"nada",3);
   }

}
