import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {
  @Input() mje:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
