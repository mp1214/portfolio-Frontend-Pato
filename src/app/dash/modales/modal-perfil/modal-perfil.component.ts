import { Component, OnInit,Input } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ImageService } from 'src/app/servicios/image.service';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.css']
})
export class ModalPerfilComponent implements OnInit {
  fotoperfil:persona|any=null;
  fotos:persona[]=[];
  id:number=0;
 img:string="";
@Input() mje:string=""
completo:boolean=false;

  constructor(private fotoPerfil:PersonaService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.cargarFoto();
    this.fotoPerfil.lista().subscribe(data =>{
      this.fotoperfil= data;
      
    })
  }
  cargarFoto():void{
    this.fotoPerfil.lista().subscribe(data =>{this.fotos= data; })
    
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.fotoPerfil.detail(id).subscribe(data=>{
      this.fotoperfil=data;
      
    },err=>{
      alert("error al modificar");
    })
  }
}

  OnUpdate(id?:number):void{
    // this.ids!=id;
     // const id=this.activatedRouter.snapshot.params['id'];
     this.fotoperfil.img = this.imageService.url[this.imageService.url.length-1];
  
     //this.completo=this.imageService.completed[ this.imageService.completed.length-1];
   
     if(id != undefined){
         this.fotoPerfil.update(id,this.fotoperfil).subscribe(data=>{
          alert("foto perfil modificada"); 
          this.cargarFoto();
      },err =>{
        alert("Error al modificar foto perfil");
        
      })
    }
  }
  uploadImage($event:any){
  
     const name="perfil_"+ 0;
     this.imageService.uploadImage($event,name,2);
     
   
   }
   }

