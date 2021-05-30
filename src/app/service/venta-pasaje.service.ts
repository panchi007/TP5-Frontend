import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentaPasajeService {

  URLBASE: string = "http://localhost:3000/api/"

  constructor(private http: HttpClient) { }

  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  ///       CONTROL PASAJE

  getPersonas(): Observable<any> {
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({
      })
    }
    return this.http.get(this.URLBASE + "pasaje", option)
  }

  getunaPersona(id): Observable<any> {
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({
      })
    }
    return this.http.get(this.URLBASE + "pasaje/EL/" + id, option)
  }

  getunPasaje(id): Observable<any> {
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({
      })
    }
    return this.http.get(this.URLBASE + "pasaje/" + id, option)
  }

  addPesaje(pasaje: Pasaje): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
    }
    let body = {
      precioPasaje: pasaje.precioPasaje,
      categoriaPasajero: pasaje.categoriaPasajero,
      fechaCompra: pasaje.fechaCompra,
      pasajero: pasaje.pasajero
    }
    return this.http.post(this.URLBASE + "pasaje", body, option)
  }

  deletePasaje(id): Observable<any> {

    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
    }
    return this.http.delete(this.URLBASE + "pasaje/" + id, option)
  }

  updatePasaje(pasaje: Pasaje): Observable<any> {

    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
    }

  //  let body = JSON.stringify(pasaje)
    let body = {
      _id : pasaje._id,
      precioPasaje: pasaje.precioPasaje,
      categoriaPasajero: pasaje.categoriaPasajero,
      fechaCompra: pasaje.fechaCompra,
      pasajero: pasaje.pasajero
    }
    return this.http.put(this.URLBASE + "pasaje/" + pasaje._id, body, option)
  }



  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  ///  CONTROL PERSONA
  getPersona(): Observable<any> {
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({
      })
    }
    return this.http.get(this.URLBASE + "persona", option)
  }
}

