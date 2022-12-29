import { Component, OnInit,Input } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ImageService } from 'src/app/servicios/image.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
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
completed:boolean=false;
urlActual:string="";
urlActual1:string="";
router:RouterModule|any=null;
perfil:number=0;

  constructor(private fotoPerfil:PersonaService, private imageService: ImageService,private formBuilder:FormBuilder,router:RouterModule) { 

  }

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
   this.perfil=1;
    if(id != undefined){
    this.fotoPerfil.detail(id).subscribe(data=>{
      console.log(this.fotoperfil)
      this.fotoperfil=data;
      this.urlActual=this.fotoperfil.imgBanner;//url de imagen banner
      this.urlActual1=this.fotoperfil.img;//url de imagen perfil
           
    },err=>{
      alert("error al modificar");
    })
  }
}

  OnUpdatePerfil(id?:number):void{
     this.fotoperfil.img = this.imageService.url[this.imageService.url.length-1];
     if(id != undefined){
         this.fotoPerfil.update(id,this.fotoperfil).subscribe(data=>{
          alert("foto perfil modificada"); 
          this.cargarFoto(); 
      },err =>{
        alert("Error al modificar foto perfil");
        
      })
    }
  }
  OnUpdateBanner(id?:number):void{
       this.fotoperfil.imgBanner = this.imageService.url[this.imageService.url.length-1];
   console.log(this.fotoperfil.imgBanner)
       if(id != undefined){
         this.fotoPerfil.update(id,this.fotoperfil).subscribe(data=>{
          alert("foto de Banner modificada"); 
          this.cargarFoto();
      },err =>{
        alert("Error al modificar foto banner");
        
      })
    }
  }
  
  uploadImageEdit($event:any,band:string){
   if(this.perfil>=1){
    const file=$event.target.files[0];
   if(band=="perfil")
   {  if(this.urlActual1==""||this.urlActual1==null ){
    console.log("url1 de perfil actuak es null pergil")
    this.imageService.uploadImage($event,2);
    
  }else{ this.imageService.uploadImageEdit($event,2,this.urlActual1);
  
  }
}else{
    if(this.urlActual==""||this.urlActual==null){
      console.log("url de banner actuak es null banner")
      this.imageService.uploadImage($event,6);
      
    }else{
      console.log("banner con url anterior")
    this.imageService.uploadImageEdit($event,6,this.urlActual);
    }
}
 setTimeout(() => {
  this.completed = true;
}, 6000);
}else{
  alert("seleccione el lapiz verdde por favor...")
}
 
   }
 
  }


