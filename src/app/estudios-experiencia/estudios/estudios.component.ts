import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
educacion: Educacion[]=[];//estudiosList:any;
  constructor(private educacionS:EducacionService, private tokenService:TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
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
