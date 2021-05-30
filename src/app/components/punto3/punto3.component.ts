import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentaPasajeService } from 'src/app/service/venta-pasaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  Pasaje: Array<Pasaje>
  pasaje: Pasaje

  Pasaje1: Array<Pasaje>
  pasaje1: Pasaje

  leelapalabra: string

  constructor(
    private ventapasajeService: VentaPasajeService,
    private router: Router
  ) {
    this.cargarPasajes()
  }

  cargarPasajes() {
    this.ventapasajeService.getPersonas().subscribe(
      result => {
        this.Pasaje = new Array<Pasaje>()
        result.forEach(element => {
          this.pasaje = new Pasaje();
          Object.assign(this.pasaje, element);
          this.Pasaje.push(this.pasaje);
        });
        console.log(this.Pasaje)
      },
      err => {
        console.log(err)
      }
    )
  }
  cargarunPasaje(leelapalabra) {
    this.ventapasajeService.getunaPersona(leelapalabra).subscribe(
      result => {
        this.Pasaje1 = new Array<Pasaje>()
        result.forEach(element => {
          this.pasaje1 = new Pasaje();
          Object.assign(this.pasaje1, element);
          this.Pasaje1.push(this.pasaje1);
        });
        console.log(this.Pasaje1)
      },
      err => {
        console.log(err)
      }
    )
  }
  borrarPasaje(id) {
    this.ventapasajeService.deletePasaje(id).subscribe(
      result => {
        window.location.reload();
        console.log(result)
      },
      err => {
        console.log(err)
      }
    )
  }
  modificarPasaje(pasaje : Pasaje) {
    this.router.navigate(["punto3pasaje/", pasaje._id])
  }

  ngOnInit(): void {
  }
}
