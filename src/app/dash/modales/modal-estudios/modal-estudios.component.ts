import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css']
})
export class ModalEstudiosComponent implements OnInit {
 
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  educacion: Educacion[]=[];
  titulo: string="";
  edu:Educacion|any=null;
  tipoeducacion:string="";
  institucion:string="";
  icono:string="";
  inicio:string="";
  fin:string="";
 // ids:number=0;
 datos:string[]=[];

  @Input() mje:string="";

  constructor(private educacionS:EducacionService, private tokenService:TokenService,private activatedRouter:ActivatedRoute,private router:Router) {
    this.datos = ['Formal','Informal-curso','Informal-bootcamp'];
   }
  isLogged=false;
  
  ngOnInit(): void {

      this.cargarEducacion();
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
    
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.educacionS.detail(id).subscribe(data=>{
      this.edu=data;
      
    },err=>{
      alert("error al modificar");
    })
  }
}
  cargarEducacion():void{
    this.educacionS.lista().subscribe(data =>{this.educacion= data; })
   
  }
  borrar(id?:number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(data =>{
        this.cargarEducacion();
        alert("se pudo eliminar satisfactoriamente");
        this.cargarEducacion();
      },err =>{
        alert("No se pudo eliminar");
      })
    }
  }

  OnCreate():void{
    
    const expe= new Educacion(this.titulo,this.tipoeducacion,this.institucion,this.icono,this.inicio,this.fin);
    this.educacionS.save(expe).subscribe(data=>{
      alert("Estudio añadido");
      
    },err=>{
      alert("Fallo al añadir");
    })
    
  }
  OnUpdate(id?:number):void{
  // this.ids!=id;
   // const id=this.activatedRouter.snapshot.params['id'];
    if(id != undefined){
       this.educacionS.update(id,this.edu).subscribe(data=>{
        alert("Estudio modificado"); 
        this.cargarEducacion();
    },err =>{
      alert("Error al modificar Educacion");
      
    })
  }
}
capturar() {
  // Pasamos el valor seleccionado a la variable verSeleccion
  this.verSeleccion = this.opcionSeleccionado;
}
}