import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-punto1-form',
  templateUrl: './punto1-form.component.html',
  styleUrls: ['./punto1-form.component.css']
})
export class Punto1FormComponent implements OnInit {

  stringimage: string;

  noti = new Noticia()

  constructor(private noticiaService: NoticiaService) { }

  generarNoticia() {

     this.noti.img = this.stringimage 

    this.noticiaService.addNoticia(this.noti).subscribe(

      result => {
        console.log(result)
        console.log(this.noti)
      },
      err => {

      }
    )

  }

  onFileChanges(files) {
    console.log("File has changed:", files);
    this.stringimage = files[0].base64;
  }
  ngOnInit(): void {
  }

}
