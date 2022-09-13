import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-letras-full-stack',
  templateUrl: './letras-full-stack.component.html',
  styleUrls: ['./letras-full-stack.component.css']
})
export class LetrasFullStackComponent implements OnInit {
efecto:any;
  constructor(private letrasEfecto:PortfolioService) { }

  ngOnInit(): void {
    this.letrasEfecto.obtenerDatos().subscribe(data =>{
      this.efecto= data.letrasefecto;
    })
  }

}
