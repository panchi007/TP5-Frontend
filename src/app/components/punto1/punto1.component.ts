import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  Noticia: Array<Noticia>
  noticia: Noticia


  posicion: number;

  // Noticia = new Noticia()

  constructor(private noticiaService: NoticiaService) {
    this.cargarNoticias()

  }

  ngOnInit(): void {
  }


  cargarNoticias() {
    this.noticiaService.obtenerNoticia().subscribe(
      result => {
        this.posicion = 0
        this.Noticia = new Array<Noticia>()
        result.forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.Noticia.push(this.noticia);
          // this.img = this.Noticia.map(function(num){

          // }
        });
        console.log(this.Noticia)
      },
      err => {
      }
    )
  }

  nextRight(): void {
    if (this.posicion == (this.Noticia.length - 1))
      this.posicion = 0;
    else
      this.posicion++;
  }

  nextLeft(): void {
    if (this.posicion == 0)
      this.posicion = this.Noticia.length - 1;
    else
      this.posicion--;
  }



}
