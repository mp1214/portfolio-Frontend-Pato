import { Component, OnInit,Input,ElementRef,ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Experiencia } from 'src/app/model/experiencia';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-modal-trabajo',
  templateUrl: './modal-trabajo.component.html',
  styleUrls: ['./modal-trabajo.component.css']
})
export class ModalTrabajoComponent implements OnInit {

@Input() mje:string=""
expe:Experiencia[]=[];
  experiencia:Experiencia|any=null;
  cargo: string="";
  descripcion: string= "";
  empresa: string="";
  es_trabajo_actual : boolean=false;
  inicio: string="";
  fin: string="";
  imgE:string="";
  form: FormGroup|any=null;
  completed:boolean=false;
  urlActual:string="";
  url:string[]=[];
  expression:boolean=false;
  band:boolean=false;
  @ViewChild('imgE') fileUploader:ElementRef|any=null;;

  constructor(private sExperiencia:SExperienciaService,private formBuilder:FormBuilder,private imageService:ImageService) {
    
    this.form=this.formBuilder.group({
      cargo:['',[Validators.required, Validators.minLength(3),Validators.maxLength(25)]],
      imgE:[''],
      inicio:['',[Validators.required,Validators.maxLength(10)]],
      fin:['',[Validators.minLength(3),Validators.maxLength(10)]],
      descripcion:['',[Validators.required, Validators.minLength(3),Validators.maxLength(350)]],
      empresa:['',[Validators.required, Validators.minLength(3),Validators.maxLength(25)]],
      es_trabajo_actual:['']
    })
   }
  
  ngOnInit(): void {

    this.cargarExperiencia();
  }
  get Cargo(){
    return this.form.get("cargo");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
  get Empresa(){
    return this.form.get("empresa");
  }
  get Inicio(){
    return this.form.get("inicio");
  }
  get Fin(){
    return this.form.get("fin");
  }
  get FinValid(){
    return this.Inicio.touched && !this.Inicio.valid;
  }
  get CargoValid(){
    return this.Cargo.touched && !this.Cargo.valid;
  }
  get InicioValid(){
    return this.Inicio.touched && !this.Inicio.valid;
  }
  get DescripcionValid(){
    return this.Descripcion.touched && !this.Descripcion.valid;
  }
  get EmpresaValid(){
    return this.Empresa.touched && !this.Empresa.valid;
  }
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data =>{this.expe=data;})
    
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.sExperiencia.detail(id).subscribe(data=>{
    this.experiencia=data;
    this.urlActual=this.experiencia.imgE;
    this.completed=false;
    this.fileUploader.nativeElement.value = null;
      if(this.experiencia.esTrabajoActual==true){
        this.isDisabled(false)
       
      }else{
        this.isDisabled(true)
      }
    },err=>{
      alert("error al cargar");
    })
  }
}
  OnCreate():void{
   this.imgE= this.imageService.url[this.imageService.url.length-1];
    const expe= new Experiencia(this.cargo,this.descripcion,this.empresa,this.es_trabajo_actual,this.inicio,this.fin,this.imgE)
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia añadida");
      this.cargarExperiencia();
    },err=>{
      alert("Fallo");
    })
    
  }

  borrar(id?:number){
   this.showModal(id);
   /* if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        this.cargarExperiencia();
        alert("se pudo eliminar satisfactoriamente");
        this.cargarExperiencia();
      },err =>{
        alert("No se pudo eliminar");
      })
    }*/
  }
 
  OnUpdate(id?:number):void{

    if(this.band==false){
      this.experiencia.imgE=this.urlActual;
    }else{
     this.experiencia.imgE=this.imageService.url[this.imageService.url.length-1];
    }
     if(id != undefined){
          this.sExperiencia.update(id,this.experiencia).subscribe(data=>{
          alert("Experiencia modificada"); 
          this.cargarExperiencia();
      },err =>{
        alert("Experiencia modificada");
        
      })
    }
  }
  uploadImage($event:any){
    this.imageService.uploadImage($event,5);
    this.completed=true ;
     setTimeout(() => {
      this.completed = true;
    }, 8000);
    this.form.controls['icono'].setValue('');
  }
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
    
      this.OnCreate();
  
    }else{
      this.form.markAllAsTouched(); 
    }
  }
  uploadImageEdit($event:any){
    const file=$event.target.files[0];
    this.band=true;
    if(this.urlActual==null){
      this.imageService.uploadImage($event,5);
      
    }else{
    this.imageService.uploadImageEdit($event,5,this.urlActual);
    }
     setTimeout(() => {
      this.completed = true;
    }, 8000);
    
  
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
  Limpiar():void{
    this.form.reset();
    this.form.controls['fin'].enable();
    this.expression=false;
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
          this.sExperiencia.delete(id).subscribe(data =>{
            this.cargarExperiencia();
            alert("se pudo eliminar satisfactoriamente");
            this.cargarExperiencia();
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
