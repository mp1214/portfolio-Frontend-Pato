import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { persona } from 'src/app/model/persona';

@Component({
  selector: 'app-letras-full-stack',
  templateUrl: './letras-full-stack.component.html',
  styleUrls: ['./letras-full-stack.component.css']
})
export class LetrasFullStackComponent implements OnInit {
efecto:persona|any=null;
  constructor(private letrasEfecto:PersonaService) { }

  ngOnInit(): void {
    this.letrasEfecto.detail(2).subscribe(data =>{
      this.efecto= data;
    })
  }

}
