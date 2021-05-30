import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogTraductor } from '../models/log-traductor';
import { TranslateLog } from '../models/translate-log';

@Injectable({
  providedIn: 'root'
})
export class LogTraductorService {

  URLBASE: string = "http://localhost:3000/api/"


  constructor(private http: HttpClient) { }

  addLogTraductor(Logtraductor: TranslateLog): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'cf14fa250dmsh740cde4b56cb65fp15c606jsn637c21a347ac',
        'x-rapidapi-host': 'systran-systran-platform-for-language-processing-v1.p.rapidapi.com'
      }),
      params: ({
        'source': Logtraductor.source,
        'target': Logtraductor.target,
        'input': Logtraductor.input
      })
    };

    return this.http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate" ,  httpOptions);

  }



  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'x-rapidapi-key': 'cf14fa250dmsh740cde4b56cb65fp15c606jsn637c21a347ac',
  //       'x-rapidapi-host': 'systran-systran-platform-for-language-processing-v1.p.rapidapi.com'
  //     }),
  //     params: ({
  //       'source': translateLog.source,
  //       'target': translateLog.target,
  //       'input': translateLog.input
  //     })
  //   };

  // return this.http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate", httpOptions);


















  ///////////////////////////////////////////////////////////
  saveLog(Logtraductor: LogTraductor): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
      params: new HttpParams({
      })
    }
    let body = JSON.stringify(Logtraductor)
    return this.http.post(this.URLBASE + "logtraductor", body, option)
  }
  ///////////////////////////////////////////////////////////////////

  getLogTraductor(): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
    }
    return this.http.get(this.URLBASE + "logtraductor", option)
  }

  getLogTraductorforParams(id): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
      })
    }
    return this.http.get(this.URLBASE + "logtraductor/" + id, option)
  }



}
