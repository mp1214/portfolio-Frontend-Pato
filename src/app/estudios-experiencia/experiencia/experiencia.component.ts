import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Experiencia } from 'src/app/model/experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
 expe:Experiencia[]=[];//experiencia:ExperienciaComponent[]=[];
  constructor(private sExperiencia:SExperienciaService,private tokenService:TokenService){}

  isLogged=false;


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
}


/*export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  constructor(private experiencia:PortfolioService) { }

  ngOnInit(): void {
    this.experiencia.obtenerDatos().subscribe(data =>{
      this.experienciaList= data.experiencia;
  })

}
}*/