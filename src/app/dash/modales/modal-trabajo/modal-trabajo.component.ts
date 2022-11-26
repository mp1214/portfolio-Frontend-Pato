import { Component, OnInit,Input } from '@angular/core';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';
import Swal from 'sweetalert2';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Experiencia } from 'src/app/model/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-modal-trabajo',
  templateUrl: './modal-trabajo.component.html',
  styleUrls: ['./modal-trabajo.component.css']
})
export class ModalTrabajoComponent implements OnInit {

@Input() mje:string=""



  constructor(private sExperiencia:SExperienciaService,private tokenService:TokenService) { }
  expe:Experiencia[]=[];
  experiencia:Experiencia|any=null;
  isLogged=false;
  cargo: string="";
  descripcion: string= "";
  empresa: string="";
  es_trabajo_actual : boolean=false;
  inicio: string="";
  fin: string="";
  imgE:string="";

  ngOnInit(): void {
    
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data =>{this.expe=data;})
    
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.sExperiencia.detail(id).subscribe(data=>{
      this.experiencia=data;
    },err=>{
      alert("error al modificar");
    })
  }
}
  OnCreate():void{
    const expe= new Experiencia(this.cargo,this.descripcion,this.empresa,this.es_trabajo_actual,this.inicio,this.fin,this.imgE)
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia añadida");
      this.cargarExperiencia();
    },err=>{
      alert("Fallo");
    })
    
  }

  borrar(id?:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        this.cargarExperiencia();
        alert("se pudo eliminar satisfactoriamente");
        this.cargarExperiencia();
      },err =>{
        alert("No se pudo eliminar");
      })
    }
  }

  OnUpdate(id?:number):void{
    // this.ids!=id;
     // const id=this.activatedRouter.snapshot.params['id'];
      if(id != undefined){
          this.sExperiencia.update(id,this.experiencia).subscribe(data=>{
          alert("Experiencia modificada"); 
          this.cargarExperiencia();
      },err =>{
        alert("Error al modificar Experiencia");
        
      })
    }
  }
 /* showModal(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }*/
}
