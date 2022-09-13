import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banerInfo:any;
  constructor(private banerDatos:PortfolioService) { }

  ngOnInit(): void {
    this.banerDatos.obtenerDatos().subscribe(data =>{
      this.banerInfo= data.banner;
    })
  }

}
