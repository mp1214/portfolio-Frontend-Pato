import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls:['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private personaS: PersonaService) { }
datos:persona|any=null;
  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos():void{
    this.personaS.lista().subscribe(data =>{this.datos= data; })
   console.log(this.datos)
  }
}
