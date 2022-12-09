import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  

  constructor(private httpClient : HttpClient) { }
  URL='http://localhost:8080/redes/';
 

  public lista():Observable <Redes[]>{
    return this.httpClient.get<Redes[]>(this.URL+'lista');

  }
  public detail(id:number):Observable<Redes>{

    return this.httpClient.get<Redes>(this.URL+ `detail/${id}`);

  }
  public save(red:Redes):Observable<any>{
return this.httpClient.post<any>(this.URL+ 'create',red);

  }

  public update(id:number, red: Redes):Observable<any>{
return this.httpClient.put<any>(this.URL +`update/${id}`,red)

  }
  public delete(id :number):Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }
}
