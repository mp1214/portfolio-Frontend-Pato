import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-letras-efectos',
  templateUrl: './letras-efectos.component.html',
  styleUrls: ['./letras-efectos.component.css']
})

export class LetrasEfectosComponent implements OnInit {
efectosList:persona|any=null;
titulo:string="";
efecto: persona[]=[];
@Input() mje:string=""


  constructor(private letras:PersonaService) { }

  ngOnInit(): void {
    this.cargarletras();
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.letras.detail(id).subscribe(data=>{
      this.efectosList=data;
  
    },err=>{
      alert("error al modificar");
    })
  }
}
cargarletras():void{
  this.letras.lista().subscribe(data =>{this.efecto= data; })

}
OnUpdate(id?:number):void{
    if(id != undefined){
       this.letras.update(id,this.efectosList).subscribe(data=>{
        alert("Estudio modificado"); 
        this.cargarletras();
    },err =>{
      alert("Error al modificar Educacion");
      
    })
  }
}
  borrar(id?:number){
   this.showModal(id);
  /*  if(id != undefined){
      this.letras.delete(id).subscribe(data =>{
       this.cargarletras();
        alert("se pudo eliminar satisfactoriamente");
        this.cargarletras();
      },err =>{
        alert("No se pudo eliminar");
      })
    }*/
  }
  showModal(id?:number){
    Swal.fire({
      title: 'realmente quiere eliminar este efecto?luego no podrá agregarlo ni editarlo',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `Conservar`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        if(id != undefined){
          this.letras.delete(id).subscribe(data =>{
           this.cargarletras();
            alert("se pudo eliminar satisfactoriamente");
            this.cargarletras();
          },err =>{
            alert("No se pudo eliminar");
          })
        }
        Swal.fire('Salvado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Los cambios fueron descartados', '', 'info')
      }
    })
  }
}
