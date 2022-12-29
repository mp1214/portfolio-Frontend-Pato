import { Component, OnInit,Input } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ImageService } from 'src/app/servicios/image.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

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
  completed:boolean=false;
  urlActual:string="";
  url:string[]=[];
  fecha:string="";
  repositorio:string="";
 form1:FormGroup|any=null;

  constructor(private proyectos:ProyectoService,private imageService:ImageService,private formBuilder:FormBuilder) {
    this.form1=this.formBuilder.group({
      proyecto:['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      img:[''],
      path:['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      fecha:['',Validators.required],
      repositorio:['',[Validators.required,Validators.minLength(10),Validators.maxLength(60)]],
     
    })
   }

  ngOnInit(): void {
    this.proyectos.lista().subscribe(data =>{
      this.proyectoList= data;
      
    })
  }
  get Proyecto(){
    return this.form1.get("proyecto");
  }
  get Img(){
    return this.form1.get("img");
  }
  get Path(){
    return this.form1.get("path");
  }
  get Fecha(){
    return this.form1.get("fecha");
  }
  get Repositorio(){
    return this.form1.get("repositorio");
  }
  get FechaValid(){
    return this.Fecha?.touched && !this.Fecha?.valid;
  }
  get RepositorioValid(){
    return this.Repositorio?.touched && !this.Repositorio?.valid;
  }
  get ImgValid(){
    return this.Img?.touched && !this.Img?.valid;
  }
  get ProyectoValid(){
    return this.Proyecto?.touched && !this.Proyecto?.valid;
  }
  get PathValid(){
    return this.Path?.touched && !this.Path?.valid;
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.proyectos.detail(id).subscribe(data=>{
      this.proyec=data;
      this.urlActual=this.proyec.imgE;
    },err=>{
      alert("error al modificar");
    })
  }
  }
  cargarProyecto():void{
    this.proyectos.lista().subscribe(data =>{this.proyectoList=data;})
    
  }
  borrar(id?:number){
    if(id != undefined){
      this.proyectos.delete(id).subscribe(data =>{
        alert("se pudo eliminar satisfactoriamente");
        this.cargarProyecto();
      },err =>{
        alert("No se pudo eliminar");
      })
    }
  }
  OnCreate():void{
    // this.habilidad.icono = this.imageService.url;
   //this.completo= this.imageService.completed[ this.imageService.completed.length-1];
    this.img= this.imageService.url[this.imageService.url.length-1]
 
     const proye= new Proyecto(this.proyecto,this.path,this.img,this.fecha,this.repositorio)
    
     this.proyectos.save(proye).subscribe(data=>{
       alert("Proyecto añadido");
       this.cargarProyecto();
       
     },err=>{
       alert("Fallo al añadir");
     })
     
   }
  OnUpdate(id?:number):void{
    //this.completo= this.imageService.completed[ this.imageService.completed.length-1];
    this.proyec.img=this.imageService.url[this.imageService.url.length-1];
 
    if(id != undefined){
          this.proyectos.update(id,this.proyec).subscribe(data=>{
          alert("certificado modificado"); 
          this.cargarProyecto();
      },err =>{
        alert("Error al modificar certificado");
        
      })
    }
  }
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form1.valid){  
      this.OnCreate();
    }else{
      this.form1.markAllAsTouched(); 
    }
  }
  uploadImage($event:any){
     this.imageService.uploadImage($event,3);
   }
   uploadImageEdit($event:any){
    const file=$event.target.files[0];
    if(this.urlActual==null||this.urlActual==""){
      console.log("url null")
      this.imageService.uploadImage($event,3);
    }else{
      console.log("url si existe")
    this.imageService.uploadImageEdit($event,3,this.urlActual);
    }
    this.completed=this.imageService.completed[this.imageService.completed.length-1];
  }
  Limpiar():void{
    this.form1.reset();
    }
}
