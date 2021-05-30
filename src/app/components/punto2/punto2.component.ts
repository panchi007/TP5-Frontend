import { Component, OnInit } from '@angular/core';
import { LogTraductor } from 'src/app/models/log-traductor';
import { LogTraductorService } from 'src/app/service/log-traductor.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  LogTraductor: Array<LogTraductor>
  logtraductor: LogTraductor

  LogTraductor1: Array<LogTraductor>
  logtraductor1: LogTraductor

  leerIdiomaOrigen : string

  constructor(private logtraductorService: LogTraductorService) {
    this.obtenerLogTraductor()
  }


  obtenerLogTraductor() {
    this.logtraductorService.getLogTraductor().subscribe(
      result => {
        this.LogTraductor = new Array<LogTraductor>()
        result.forEach(element => {
          this.logtraductor = new LogTraductor();
          Object.assign(this.logtraductor, element);
          this.LogTraductor.push(this.logtraductor);
        });
        console.log(this.LogTraductor)
      },
      err => {
        console.log(err)
      }
    )
  }

  obtenerLogTraductorporParametro(id) {
    this.logtraductorService.getLogTraductorforParams(id).subscribe(
      result => {
        this.LogTraductor1 = new Array<LogTraductor>()
        result.forEach(element => {
          this.logtraductor1 = new LogTraductor();
          Object.assign(this.logtraductor1, element);
          this.LogTraductor1.push(this.logtraductor1);
        });
        console.log(this.LogTraductor1)
      },
      err => {
        console.log(err)
      }
    )
  }


  ngOnInit(): void {
  }

}
