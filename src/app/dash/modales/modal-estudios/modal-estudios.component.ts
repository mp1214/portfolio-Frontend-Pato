import { Component, OnInit,Input } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ImageService } from 'src/app/servicios/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css']
})
export class ModalEstudiosComponent implements OnInit {
 
  educacion: Educacion[]=[];
  titulo: string="";
  edu:Educacion|any=null;
  tipoeducacion:string="";
  institucion:string="";
  cursando: boolean=false;
  icono:string="";
  inicio:string="";
  fin:string="";
  datos:string[]=[];
  form: FormGroup|any=null;
  completed:boolean=false;
  urlActual:string="";
  @Input() mje:string="";
  expression:boolean=false;
  band:boolean=false;
  band2:number=0;

  constructor(private educacionS:EducacionService,private router:Router,private formBuilder:FormBuilder,private imageService:ImageService) {
    this.datos = ['Formal','Informal-curso','Informal-bootcamp'];
    this.form=this.formBuilder.group({
      institucion:['',[Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
      icono:[''],
      inicio:['',[Validators.required,/* Validators.pattern('(0[1-9]|[1-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/[0-9]{4}'),*/Validators.maxLength(10)]],
      fin:['',[Validators.minLength(3),Validators.maxLength(10)]],
      titulo:['',[Validators.required, Validators.minLength(3),Validators.maxLength(55)]],
      tipoeducacion:[''],
      cursando:['']
    })
   }
    
  ngOnInit(): void {
     this.cargarEducacion();
    }
  get Institucion(){
    return this.form.get("institucion");
  }
  get Inicio(){
    return this.form.get("inicio");
  }
  get InstitucionValid(){
    return this.Institucion.touched && !this.Institucion.valid;
  }

  get FinValid(){
    return this.Inicio.touched && !this.Inicio.valid;
  }
  get Fin(){
    return this.form.get("fin");
  }
  get InicioValid(){
    return this.Inicio.touched && !this.Inicio.valid;
  }
  get Titulo(){
    return this.form.get("titulo");
  }
  get TituloValid(){
    return this.Titulo.touched && !this.Titulo.valid;
  }
  get TipoEducacion(){
    return this.form.get("tipoeducacion");
  }
  get TipoEducacionValid(){
    return this.TipoEducacion.touched && !this.TipoEducacion.valid;
  }
 
  cargarDetalle(id?:number){
    if(id != undefined){
    this.educacionS.detail(id).subscribe(data=>{
      this.edu=data;
      this.urlActual=this.edu.icono;
      this.completed=false;
    if(this.edu.cursando==true){
      this.isDisabled(false)
    }else{
      this.isDisabled(true)
    }
    },err=>{
      alert("error al modificar");
    })
  }
}
  cargarEducacion():void{
    this.educacionS.lista().subscribe(data =>{this.educacion= data; })
   
  }
  borrar(id?:number){
    this.showModal(id);
   /* if(id != undefined){
      this.educacionS.delete(id).subscribe(data =>{
        this.cargarEducacion();
        alert("se pudo eliminar satisfactoriamente");
        this.cargarEducacion();
      },err =>{
        alert("No se pudo eliminar");
      })
    }*/
  }

  OnCreate():void{
    if(this.band2!=0)
    this.icono=this.imageService.url[this.imageService.url.length-1];
    const expe= new Educacion(this.titulo,this.tipoeducacion,this.institucion,this.icono,this.inicio,this.fin,this.cursando);
    this.educacionS.save(expe).subscribe(data=>{
      alert("Estudio añadido");
      this.cargarEducacion();
      
    },err=>{
      alert("Fallo al añadir");
    })
    
  }
  OnUpdate(id?:number):void{
   if(this.band==false){
    this.edu.icono=this.urlActual;
  }else{
   this.edu.icono=this.imageService.url[this.imageService.url.length-1];
  }
    if(id != undefined){
       this.educacionS.update(id,this.edu).subscribe(data=>{
        alert("Estudio modificado"); 
        this.cargarEducacion();
    },err =>{
      alert("Error al modificar Educacion");
    })
  }
}
uploadImage($event:any){
  this.band2=1;
  this.imageService.uploadImage($event,4);
  setTimeout(() => {
    this.completed = true;
  }, 8000);
}
uploadImageEdit($event:any){
  this.band2=1;
  const file=$event.target.files[0];
  this.band=true;
  if(this.urlActual==null||this.urlActual==""){
    this.imageService.uploadImage($event,1);
  }else{
    this.imageService.uploadImageEdit($event,4,this.urlActual);
  }
  this.form.controls['icono'].setValue('');
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
capturar() {
this.tipoeducacion=this.form.get('tipoeducacion').value;
 
}
Limpiar():void{
  this.form.reset();
  this.form.controls['fin'].enable();
    this.expression=false;
  }

isDisabled(value:boolean) {
    if(!value){
    this.form.controls['fin'].disable(); 
    this.form.controls['fin'].setValue('');
  }
    else{
     this.form.controls['fin'].enable();
    }
    this.expression=!this.expression;
  }
  showModal(id?:number){
    Swal.fire({
      title: 'realmente quiere eliminar este estudio?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `Conservar`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        if(id != undefined){
          this.educacionS.delete(id).subscribe(data =>{
            this.cargarEducacion();
            alert("se pudo eliminar satisfactoriamente");
            this.cargarEducacion();
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