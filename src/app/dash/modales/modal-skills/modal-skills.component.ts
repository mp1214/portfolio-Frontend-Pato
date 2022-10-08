import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-skills',
  templateUrl:'./modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})
export class ModalSkillsComponent implements OnInit {
habilidad:string=""
porcentaje:number=0
icono:string=""
Skills:any
@Input() mje:string=""

  constructor(private skills:PortfolioService) { }

  ngOnInit(): void {
    this.skills.obtenerDatos().subscribe(data =>{
      this.habilidad= data.habilidad;
      this.porcentaje= data.porcentaje;
      this.icono= data.icono;
      this.Skills=data.skills;
      console.log(this.mje)
  })

}
}