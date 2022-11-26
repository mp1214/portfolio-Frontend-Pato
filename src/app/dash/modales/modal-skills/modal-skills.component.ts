import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Habilidad } from 'src/app/model/habilidad';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls:['./modal-skills.component.css'] 
})
export class ModalSkillsComponent implements OnInit {
  hab: Habilidad[]=[];
  habilidad:Habilidad|any=null;
 // habi:string="";
  porcentaje:number=0; 
  icono:string="";
@Input() mje:string=""

  constructor(private skills:HabilidadService,private token: TokenService) { }

  ngOnInit(): void {
    this.skills.lista().subscribe(data =>{
      this.hab= data;
           
  })

}
cargarHabilidad():void{
  this.skills.lista().subscribe(data =>{this.hab=data;})
  
}
cargarDetalle(id?:number){
  if(id != undefined){
  this.skills.detail(id).subscribe(data=>{
    this.habilidad=data;
  },err=>{
    alert("error al modificar");
  })
}
}
OnCreate():void{
  const habi= new Habilidad(this.habilidad,this.porcentaje,this.icono)
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
  // this.ids!=id;
   // const id=this.activatedRouter.snapshot.params['id'];
    if(id != undefined){
        this.skills.update(id,this.habilidad).subscribe(data=>{
        alert("Habilidad modificada"); 
    },err =>{
      alert("Error al modificar Habilidad");
      
    })
  }
}
}