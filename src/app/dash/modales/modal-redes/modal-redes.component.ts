import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit {
  redesList: any;
  @Input() mje:string=""

  constructor(private redes:PortfolioService) { }

  ngOnInit(): void {
    this.redes.obtenerDatos().subscribe(data =>{
      this.redesList= data.redes;
      
    })
  }

}
