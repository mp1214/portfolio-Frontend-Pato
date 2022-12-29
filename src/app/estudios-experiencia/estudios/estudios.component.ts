import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
educacion: Educacion[]=[];//estudiosList:any;
  constructor(private educacionS:EducacionService, private imageService:ImageService) { }
 
  expe:Educacion|any=null;

  ngOnInit(): void {
    this.cargarEducacion();
  }
  cargarEducacion():void{
    this.educacionS.lista().subscribe(data =>{this.educacion= data; })
    console.log(this.educacion)
  }
  borrar(id?:number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(data =>{
        this.cargarEducacion();
      },err =>{
        alert("No se pudo eliminar");
      })
    }
  }
  
}
