import { Component, OnInit,Input } from '@angular/core';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit {
  redesList: Redes[]=[];
  red:Redes|any=null;
  id:number=0;
  imagen:string="";
  nombre:string="";
  path:string="";
  
  @Input() mje:string=""

  constructor(private redes:RedesService, private imageService:ImageService) { }

  ngOnInit(): void {
    this.redes.lista().subscribe(data =>{
      this.redesList= data;
      console.log(this.mje)
    })
  }
  cargarRedes():void{
    this.redes.lista().subscribe(data =>{this.red=data;})
    
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.redes.detail(id).subscribe(data=>{
      this.red=data;
    },err=>{
      alert("error al modificar");
    })
  }
  }
  OnCreate():void{
   // this.habilidad.icono = this.imageService.url;
  //  this.imagen= this.imageService.url;
    const habi= new Redes(this.nombre,this.imagen,this.path)
   
    this.redes.save(habi).subscribe(data=>{
      alert("Red social añadida");
      
    },err=>{
      alert("Fallo al añadir");
    })
    
  }
  
  borrar(id?:number){
    if(id != undefined){
      this.redes.delete(id).subscribe(data =>{
       
        alert("se pudo eliminar satisfactoriamente");
        this.cargarRedes();
      },err =>{
        alert("No se pudo eliminar");
      })
    }
  }
  OnUpdate(id?:number):void{
    // this.ids!=id;
     // const id=this.activatedRouter.snapshot.params['id'];
     
   
      if(id != undefined){
        console.log(this.red)
        this.redes.update(id,this.red).subscribe(data=>{
          alert("Red social modificada"); 
          this.cargarRedes();
      },err =>{
         alert("Error al modificar red");
        
      })
    }
  }
 /* uploadImage($event:any){
     const name="red_"+ this.id;
     this.imageService.uploadImage($event,name);
     this.id=this.id+1;
    
   }*/
}
