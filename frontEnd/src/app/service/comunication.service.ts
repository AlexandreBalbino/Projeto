import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor(private http: HttpClient) {

   }
  
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })};

  

  public CallBackEnd(){
    const  params = new  HttpParams();

     return this.http.request("GET","http://backendalexandrebm.eu-west-1.elasticbeanstalk.com/",{responseType:"json",params});    
  }

}
