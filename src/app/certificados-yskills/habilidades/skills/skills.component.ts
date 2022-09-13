import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skillsList:any;
  constructor(private skills:PortfolioService) { }

  ngOnInit(): void {
    this.skills.obtenerDatos().subscribe(data =>{
      this.skillsList= data.skills;
      
    })
  }

}
