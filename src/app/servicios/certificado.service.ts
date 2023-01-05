import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificado } from '../model/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  URL='https://portfolio-service-3.onrender.com/certificado/';
  constructor(private httpClient : HttpClient) { }
  public lista():Observable <Certificado[]>{
    return this.httpClient.get<Certificado[]>(this.URL+'lista');
  }
  public detail(id:number):Observable<Certificado>{
    return this.httpClient.get<Certificado>(this.URL+ `detail/${id}`);
  }
  public save(certificado:Certificado):Observable<any>{
return this.httpClient.post<any>(this.URL+ 'create',certificado);
  }

  public update(id:number, certificado: Certificado):Observable<any>{
return this.httpClient.put<any>(this.URL +`update/${id}`,certificado)
  }
  public delete(id :number):Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }
}
