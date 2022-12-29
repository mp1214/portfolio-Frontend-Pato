import { Component, OnInit,Input } from '@angular/core';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Habilidad } from 'src/app/model/habilidad';
import { ImageService } from 'src/app/servicios/image.service';
import { Storage,ref,uploadBytes,list,getDownloadURL,deleteObject } from '@angular/fire/storage';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DefaultUrlSerializer } from '@angular/router';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls:['./modal-skills.component.css'] 
})
export class ModalSkillsComponent implements OnInit {
  hab: Habilidad[]=[];
  habilidad?:Habilidad|any=null;
  completed:boolean=false;
  id:number= 0;
  porcentaje:number=0; 
  icono:string="";
  @Input() mje:string=""
  url: string[]=[];
  urlActual:string="";
  file:File|any=null;
  $even:Event|any;
  form: FormGroup|any=null;
  habi : string="";
  band:boolean=false;
  constructor(private skills:HabilidadService,public imageService:ImageService,public storage : Storage,private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      icono:[''],
      habi:['',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      porcentaje:['',[Validators.required, Validators.min(1),Validators.max(100)]]
    })
   }

  ngOnInit(): void {
    
   this.cargarHabilidad();
    this.urlActual= this.habilidad.icono;
    console.log(this.habilidad.icono);
}
get Habilidad(){
  return this.form.get("habi");
}

get Porcentaje(){
  return this.form.get("porcentaje");
}
get HabilidadValid(){
  return this.Habilidad.touched && !this.Habilidad.valid;
}
get PorcentajeValid(){
  return this.Porcentaje.touched && !this.Porcentaje.valid;
}
cargarHabilidad():void{
  this.skills.lista().subscribe(data =>{this.hab=data;})
  
}
cargarDetalle(id?:number){
  if(id != undefined){
  this.skills.detail(id).subscribe(data=>{
    this.habilidad=data;
    this.urlActual=this.habilidad.icono;
    this.completed=false;
  },err=>{
    alert("error al modificar");
  })
}
this.urlActual=this.habilidad.icono;
}
OnCreate():void{
  
 // this.icono=this.imageService.url;

 this.icono=this.imageService.url[this.imageService.url.length-1];
  const habi= new Habilidad(this.habilidad,this.porcentaje,this.icono);

  this.skills.save(habi).subscribe(data=>{
    alert("habilidad añadida");
    
  },err=>{
    alert("Fallo al añadir");
  })
  
}

borrar(id?:number){
  if(id != undefined){
    this.skills.delete(id).subscribe(data =>{
      this.cargarHabilidad();
      alert("se pudo eliminar satisfactoriamente");
    },err =>{
      alert("No se pudo eliminar");
    })
  }
}

OnUpdate(id?:number):void{
  if(this.band==false){
    this.habilidad.icono=this.urlActual;
  }else{
   this.habilidad.icono=this.imageService.url[this.imageService.url.length-1];
  }
 
  this.habilidad.icono = this.imageService.url[this.imageService.url.length-1];
    if(id != undefined){
        this.skills.update(id,this.habilidad).subscribe(data=>{
        alert("Habilidad modificada"); 
    },err =>{
      alert("Error al modificar Habilidad");
      
    })
  }
}
uploadImage($event:any) {
  
  this.imageService.uploadImage($event,0);
  console.log( setTimeout(() => {
    this.completed = true;
  }, 6000));
  // this.completed=this.imageService.completado;
  
}

onEnviar(event:Event){
  event.preventDefault;
  if(this.form.valid){
    this.OnCreate();
  }else{
    this.form.markAllAsTouched(); 
  }
}
onEnviarEdit($event:any,id:number){
  $event.preventDefault;
  
  if(this.form.valid){
  
    this.OnUpdate(id);

  }else{
    this.form.markAllAsTouched(); 
  }
}
uploadImageEdit($event:any){
  this.band=true;
  if(this.urlActual==null){
    this.imageService.uploadImage($event,0);
    
  }else{
  this.imageService.uploadImageEdit($event,0,this.urlActual);
  }

  console.log( setTimeout(() => {
    this.completed = true;
  }, 6000));

}
Limpiar():void{
  this.form.reset();
  }
}
