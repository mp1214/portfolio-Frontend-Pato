import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.nuevo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  
    URL= 'Http://localhost:8080/personas/';

    constructor(private http:HttpClient) {}
  
    obtenerDatos():Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }
   }





