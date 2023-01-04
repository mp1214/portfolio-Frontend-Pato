import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLogged= false;
    isLogginFail =false;
    loginUsuario!: LoginUsuario;
    nombreUsuario!: string;
    password!:string;
    roles : string[]=[];
    errMsj!:string;
    form: FormGroup|any=null;
   
  constructor(private tokenService:TokenService, private authService:AuthService,private router:Router,private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      nombreUsuario:['',[Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      password:['',[Validators.required, Validators.minLength(3),Validators.maxLength(12)]]
    })
   }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLogginFail= false;
      this.roles = this.tokenService.getAuthorities();

    }
  }
    get Usuario(){
      return this.form.get("nombreUsuario");
    }

    get Password(){
      return this.form.get("password");
    }
    get NombreUsuarioValid(){
      return this.Usuario.touched && !this.Usuario.valid;
    }
    get PasswordValid(){
      return this.Password.touched && !this.Password.valid;
    }
    onLogin():void{
      this.loginUsuario= new LoginUsuario(this.nombreUsuario,this.password);
    
      
      this.authService.login(this.loginUsuario).subscribe(data=>{
        this.isLogged=true;
        this.isLogginFail= false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
    
         if(this.nombreUsuario=="user"){
        this.router.navigate(['intro'])
       }else{
        if(this.nombreUsuario=="patriciaadmin"){
          this.router.navigate(['/dashboard'])
        }

       } 
  
      },err =>{
        this.isLogged=false;
        this.isLogginFail=true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);   
        
      }

      )
    }
   
}
