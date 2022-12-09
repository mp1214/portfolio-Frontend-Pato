import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicios/persona.service'; 
import { persona } from '../model/persona';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banerInfo:persona|any=null;
  constructor(private banerDatos:PersonaService) { }

  ngOnInit(): void {
    this.banerDatos.detail(2).subscribe(data =>{
     this.banerInfo= data;
     
    })
  }

}
