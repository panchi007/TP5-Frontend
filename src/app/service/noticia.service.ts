import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  URLBASE: string = "http://localhost:3000/api/"

  constructor(private http: HttpClient) { }




  addNoticia(noticia: Noticia): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
    }
    let body = JSON.stringify(noticia)
    return this.http.post(this.URLBASE + "noticia", body, option)
  }

  obtenerNoticia(): Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
    }
    return this.http.get(this.URLBASE + "noticia", option)
  }


}
