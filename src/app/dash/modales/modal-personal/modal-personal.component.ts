import { Component, OnInit,Input } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { persona } from 'src/app/model/persona';

@Component({
  selector: 'app-modal-personal',
  templateUrl: './modal-personal.component.html',
  styleUrls: ['./modal-personal.component.css']
})
export class ModalPersonalComponent implements OnInit {
 
  form: FormGroup|any=null;
  persona:persona|any=null;
  pers:persona[]=[];
  @Input() mje:string=""

  constructor(private personal:PersonaService,private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(3),Validators.maxLength(25)]],
     apellido:['',[Validators.required, Validators.minLength(3),Validators.maxLength(25)]],
      domicilio:['',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]],
      email:['',[Validators.required,Validators.minLength(10),Validators.maxLength(25)]],
      telefono:['',[Validators.required, Validators.minLength(6),Validators.maxLength(15)]],
      acerca_de_mi:['',[Validators.required, Validators.minLength(6),Validators.maxLength(700)]]
    })
   }

  ngOnInit(): void {
    this.personal.lista().subscribe(data =>{
      this.pers=data;
      console.log(this.mje)
      /*   this.nombre= data.nombre;
      this.apellido= data.apellido;
      this.telefono= data.telefono;
      this.domicilio= data.domicilio;
      this.email= data.email;
     */      
    })
  }
  get Nombre(){
    return this.form.get("nombre");
  }
  get Apellido(){
    return this.form.get("apellido");
  }
  get Direccion(){
    return this.form.get("domicilio");
  }
  get Email(){
    return this.form.get("email");
  }
  get Telefono(){
    return this.form.get("telefono");
  }
  get AcercaDeMi(){
    return this.form.get("acerca_de_mi");
  }
  get NombreValid(){
    return this.Nombre.touched && !this.Nombre.valid;
  }
  get TelefonoValid(){
    return this.Telefono.touched && !this.Telefono.valid;
  }
  get EmailValid(){
    return this.Email.touched && !this.Email.valid;
  }
  get DireccionValid(){
    return this.Direccion.touched && !this.Direccion.valid;
  }
  get ApellidoValid(){
    return this.Apellido.touched && !this.Apellido.valid;
  }
  get AcercaDeMiValid(){
    return this.AcercaDeMi.touched && !this.AcercaDeMi.valid;
  }
  cargarPersonal():void{
    this.personal.lista().subscribe(data =>{this.pers= data; })
   
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.personal.detail(id).subscribe(data=>{
      this.persona=data;
      console.log(this.persona)
     
    },err=>{
      alert("error al cargar");
    })
  }
}
OnUpdatePersonal(id?:number):void{
  // this.ids!=id;
   // const id=this.activatedRouter.snapshot.params['id'];
  
    if(id != undefined){
       this.personal.update(id,this.persona).subscribe(data=>{
        alert("Datos personales modificados"); 
        this.cargarPersonal();
    },err =>{
      alert("Error al modificar Informacion personal");
      
    })
  }
}
OnUpdateAcerca(id?:number):void{
  if(id != undefined){
    this.personal.update(id,this.persona).subscribe(data=>{
     alert("descripcion Acerca de mi modificada"); 
     this.cargarPersonal();
 },err =>{
   alert("Error al modificar descripcion Acerca de mi");
   
 })
}
}
}
