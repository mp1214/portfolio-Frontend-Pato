import { Component, OnInit,Input } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ImageService } from 'src/app/servicios/image.service';
import {FormBuilder} from '@angular/forms';
import { RouterModule } from '@angular/router';
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
band:boolean=false;
band2:number=0;

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
      this.completed=false;
           
    },err=>{
      alert("error al modificar");
    })
  }
}

  OnUpdatePerfil(id?:number):void{
    if(this.band2!=0)
    {this.fotoperfil.img = this.imageService.url[this.imageService.url.length-1];
    this.fotoperfil.imgBanner=this.urlActual;
    } 
    if(id != undefined){
         this.fotoPerfil.update(id,this.fotoperfil).subscribe(data=>{
          alert("foto perfil modificada"); 
          this.cargarFoto(); 
      },err =>{
        alert("Error al modificar foto perfil");
        
      })
    }  this.completed=false;
  }
  OnUpdateBanner(id?:number):void{
    if(this.band2!=0)  
    {this.fotoperfil.imgBanner = this.imageService.url[this.imageService.url.length-1];
    this.fotoperfil.img =this.urlActual1;
    }
    console.log(this.fotoperfil)
       if(id != undefined){
         this.fotoPerfil.update(id,this.fotoperfil).subscribe(data=>{
          alert("foto de Banner modificada"); 
          this.cargarFoto();
        
      },err =>{
        alert("Error al modificar foto banner");
      })
    }  this.completed=false;
  }
  
  uploadImageEdit($event:any,band:string){
    this.band2=1;
    if(this.perfil>=1){
    const file=$event.target.files[0];
   if(band=="perfil")
   {  if(this.urlActual1==""||this.urlActual1==null ){
      this.imageService.uploadImage($event,2);
  }else{ this.imageService.uploadImageEdit($event,2,this.urlActual1);
  }
}else{
    if(this.urlActual==""||this.urlActual==null ||this.urlActual==undefined){
      this.imageService.uploadImage($event,6);
    }else{
      console.log("la imagen actual es "+this.urlActual)
    this.imageService.uploadImageEdit($event,6,this.urlActual);
    }
}
 setTimeout(() => {
  this.completed = true;
}, 15000);
}else{
  alert("seleccione el lapiz verde por favor...")
}
   }
  }


