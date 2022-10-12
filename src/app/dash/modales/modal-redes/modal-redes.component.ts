import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit {
  @Input() mje:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
