import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { TokenService } from 'src/app/servicios/token.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habilidades: Habilidad[]=[];
  isLogged:boolean=false;
  constructor(private skills:HabilidadService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
cargarHabilidad(){
  this.skills.lista().subscribe(data =>{
    this.habilidades= data;
    
  })
}
}
