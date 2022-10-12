import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letras-efectos',
  templateUrl: './letras-efectos.component.html',
  styleUrls: ['./letras-efectos.component.css']
})
export class LetrasEfectosComponent implements OnInit {
@Input() mje:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
