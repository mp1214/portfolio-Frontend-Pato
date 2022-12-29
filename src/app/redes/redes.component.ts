import { Component, OnInit } from '@angular/core';
import { TokenService } from '../servicios/token.service';
import { Router } from '@angular/router';
import { RedesService } from '../servicios/redes.service';
import { Redes } from '../model/redes';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { AcercadeMiComponent } from '../acercade-mi/acercade-mi.component';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
isLogged= false;
redes:Redes[]=[];
filmIcon = faLink;
  constructor(private router:Router,private tokenService:TokenService ,private red:RedesService) { }

  ngOnInit(): void {
    this.red.lista().subscribe(data =>{
      
      this.redes=data;
    
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }  
    
  
}
  onLogOut():void{
    this.tokenService.logOut();
    this.router.navigate(['/intro']);
    
  }
  login(){
  this.router.navigate(['/intro']);
   
  }
  

  }
