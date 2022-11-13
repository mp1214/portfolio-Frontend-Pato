import { Component, OnInit } from '@angular/core';
import { TokenService } from '../servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
isLogged= false;
  constructor(private router:Router,private tokenService:TokenService ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }  
    console.log(this.isLogged)
  }
onLogOut():void{
  this.tokenService.logOut();
  this.router.navigate(['/intro']);
  
}
login(){
this.router.navigate(['/intro']);
}
}
