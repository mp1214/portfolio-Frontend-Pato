import { Component, OnInit,Input } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ImageService } from 'src/app/servicios/image.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

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
  band:boolean=false;
  band2:number=0;

  constructor(private proyectos:ProyectoService,private imageService:ImageService,private formBuilder:FormBuilder) {
    this.form1=this.formBuilder.group({
      proyecto:['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      img:[''],
      path:['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      fecha:['',Validators.required],
      repositorio:['',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]],
     
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
      this.urlActual=this.proyec.img;
      this.completed=false;
      this.band=false;
    },err=>{
      alert("error al modificar");
    })
  }
  }
  cargarProyecto():void{
    this.proyectos.lista().subscribe(data =>{this.proyectoList=data;})
    
  }
  borrar(id?:number){
    this.showModal(id);
    /* if(id != undefined){
      this.proyectos.delete(id).subscribe(data =>{
        alert("se pudo eliminar satisfactoriamente");
        this.cargarProyecto();
      },err =>{
        alert("No se pudo eliminar");
      })
    }*/
  }
  OnCreate():void{
    if(this.band2!=0)
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
    console.log("urlActual es "+this.urlActual);
    if(this.band==false){
      this.proyec.img=this.urlActual;
    }else{
    this.proyec.img=this.imageService.url[this.imageService.url.length-1];
    }
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
    this.band2=1;
     this.imageService.uploadImage($event,3);
     setTimeout(() => {
      this.completed = true;
    }, 8000);
   }
   uploadImageEdit($event:any){
    this.band2=1;
    this.band=true;
    const file=$event.target.files[0];
    this.band=true;
    if(this.urlActual==null||this.urlActual==""){
       this.imageService.uploadImage($event,3);
    }else{
    this.imageService.uploadImageEdit($event,3,this.urlActual);
    }
    this.completed=this.imageService.completed[this.imageService.completed.length-1];
    setTimeout(() => {
      this.completed = true;
    }, 8000);
  }
  Limpiar():void{
    this.form1.reset();
    }
    showModal(id?:number){
      Swal.fire({
        title: 'realmente quiere eliminar este proyecto?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: `Conservar`,
      }).then((result) => {
       
        if (result.isConfirmed) {
          if(id != undefined){
            this.proyectos.delete(id).subscribe(data =>{
              alert("se pudo eliminar satisfactoriamente");
              this.cargarProyecto();
            },err =>{
              alert("No se pudo eliminar");
            })
          }
          Swal.fire('Borrado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Los cambios fueron descartados', '', 'info')
        }
      })
    }
}
