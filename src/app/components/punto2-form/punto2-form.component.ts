import { Component, OnInit } from '@angular/core';
import { LogTraductor } from 'src/app/models/log-traductor';
import { LogTraductorService } from 'src/app/service/log-traductor.service';
import { TranslateLog } from '../../models/translate-log'

@Component({
  selector: 'app-punto2-form',
  templateUrl: './punto2-form.component.html',
  styleUrls: ['./punto2-form.component.css']
})
export class Punto2FormComponent implements OnInit {



  public translateLog: TranslateLog;
  public traductorLog: LogTraductor;

  public buttomSave: boolean = false;


  constructor(private logtraductorService: LogTraductorService,) {
    this.translateLog = new TranslateLog();
    this.traductorLog = new LogTraductor();
  }

  public getAnswer(): void {

    this.traductorLog.textoOrigen = this.translateLog.input;
    this.traductorLog.idiomaOrigen = this.translateLog.source;
    this.traductorLog.idiomaDestino = this.translateLog.target;

    this.logtraductorService.addLogTraductor(this.translateLog).subscribe(
      (respuesta) => {
        this.translateLog.answer = respuesta['outputs'][0].output;
        console.log(respuesta);

        this.traductorLog.textoDestino = this.translateLog.answer;
      },
      huboUnerror => {
        console.log(huboUnerror);
      }
    );

    this.buttomSave = true;
  }


  public save(): void {
    this.buttomSave = false;

    this.logtraductorService.saveLog(this.traductorLog).subscribe(
      result => {
        console.log(result);

        if (result.status == "1") {
          alert("Success");
        }
      },
      error => {
        console.log(error);
      }
    );

    this.translateLog = new TranslateLog();
  }


  public isSourceIt(): void {
    this.translateLog.textoDe = "From Italiano";
    this.translateLog.source = "it";
  }

  public isSourceFr(): void {
    this.translateLog.textoDe = "From France";
    this.translateLog.source = "fr";
  }

  public isSourceEn(): void {
    this.translateLog.textoDe = "From Ingles";
    this.translateLog.source = "en";
  }

  public isSourceEs(): void {
    this.translateLog.textoDe = "From Español";
    this.translateLog.source = "es";
  }


  public isTargetIt(): void {
    this.translateLog.textoA = "to Italiano";
    this.translateLog.target = "it";
  }

  public isTargetFr(): void {
    this.translateLog.textoA = "to France";
    this.translateLog.target = "fr";
  }

  public isTargetEn(): void {
    this.translateLog.textoA = "to Ingles";
    this.translateLog.target = "en";
  }

  public isTargetEs(): void {
    this.translateLog.textoA = "to Español";
    this.translateLog.target = "es";
  }

  ngOnInit(): void {
  }

}
