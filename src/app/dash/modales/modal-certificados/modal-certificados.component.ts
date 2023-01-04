import { Component, OnInit,Input } from '@angular/core';
import { Certificado } from 'src/app/model/certificado';
import { CertificadoService } from 'src/app/servicios/certificado.service';
import { ImageService } from 'src/app/servicios/image.service';
import { Storage } from '@angular/fire/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-certificados',
  templateUrl: './modal-certificados.component.html',
  styleUrls: ['./modal-certificados.component.css']
})
export class ModalCertificadosComponent implements OnInit {
  certificados: Certificado[]=[];
  @Input() mje:string=""
  img : string="";
  cert:Certificado|any=null;
  titulo : string="";
  id:number=0;
  urlActual: string="";
  images:string[]=[];
  completed:boolean=false;
  url:string|any=null;
  form: FormGroup|any=null;

  constructor(private certifi:CertificadoService,public imageService:ImageService,private storage:Storage,private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      img:[''],
      titulo:['',[Validators.required, Validators.minLength(3),Validators.maxLength(60)]]
    })
   }

  ngOnInit(): void {
  
    this.cargarCertificado();
  } 
    get Imagen(){
      return this.form.get("img");
    }

    get Titulo(){
      return this.form.get("titulo");
    }
    get TituloValid(){
      return this.Titulo.touched && !this.Titulo.valid;
    }
  
   
  cargarDetalle(id?:number){
    if(id != undefined){
    this.certifi.detail(id).subscribe(data=>{
      this.cert=data;
      this.urlActual=this.cert.img;
      this.completed=false;
    },err=>{
      alert("error al modificar");
    })
  }
  }
  cargarCertificado():void{
    this.certifi.lista().subscribe(data =>{this.certificados=data;})
    
  }
  borrar(id?:number){
   this.showModal(id);
    /* if(id != undefined){
      this.certifi.delete(id).subscribe(data =>{
        this.cargarCertificado();
        alert("se pudo eliminar satisfactoriamente");
      },err =>{
        alert("No se pudo eliminar");
      })
    }*/
  }
  OnCreate():void{
    this.img=this.imageService.url[this.imageService.url.length-1];
     const habi= new Certificado(this.titulo,this.img) 
     this.certifi.save(habi).subscribe(data=>{
       alert("certificado añadido");
       this.cargarCertificado();
       
     },err=>{
       alert("Fallo al añadir");
     })
     
   }
  OnUpdate(id?:number):void{
     this.cert.img = this.imageService.url[this.imageService.url.length-1];
      if(id != undefined){
          this.certifi.update(id,this.cert).subscribe(data=>{
            alert("certificado modificado"); 
          this.cargarCertificado();
      },err =>{
        alert("Error al modificar certificado");
      })
    }
  }
  uploadImage($event:any){
    this.imageService.uploadImage($event,1);
   // this.completed=this.imageService.completed[this.imageService.completed.length-1];
    setTimeout(() => {
      this.completed = true;
    }, 8000);
  }
  uploadImageEdit($event:any){
    if(this.urlActual==null||this.urlActual==""){
      this.imageService.uploadImage($event,1);
    }else{
    this.imageService.uploadImageEdit($event,1,this.urlActual);
    }
   setTimeout(() => {
    this.completed = true;
  }, 8000);
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
  Limpiar():void{
  this.form.reset();
  this.completed=false;
  }
  showModal(id?:number){
    Swal.fire({
      title: 'realmente quiere eliminar este certificado?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `Conservar`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        if(id != undefined){
          this.certifi.delete(id).subscribe(data =>{
            this.cargarCertificado();
            alert("se pudo eliminar satisfactoriamente");
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
