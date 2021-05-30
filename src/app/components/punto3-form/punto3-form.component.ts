import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { VentaPasajeService } from 'src/app/service/venta-pasaje.service';

@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent implements OnInit {

  Pasajero: Array<Persona>
  pasajero: Persona
  accion: string = "new"
  Categoria = ["M", "A", "J"]
  varconter: any
  pasaje = new Pasaje()

  constructor(private ventapasajeService: VentaPasajeService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getPasajeros()
    this.activateRoute.params.subscribe(
      params => {
        this.cargarPasaje(params.id)
      },
      err => {
      }
    )
  }

  getPasajeros() {
    this.ventapasajeService.getPersona().subscribe(
      result => {
        this.Pasajero = new Array<Persona>()
        result.forEach(element => {
          this.pasajero = new Persona();
          Object.assign(this.pasajero, element);
          this.Pasajero.push(this.pasajero);
        });
        console.log(this.Pasajero)
      },
      err => {
        console.log(err)
      }
    )
  }

  agregarPasaje() {
    this.ventapasajeService.addPesaje(this.pasaje).subscribe(
      result => {
        console.log(result)
        console.log(this.pasaje)
        window.location.reload();
      },
      err => {
        console.log(err)
      }
    )
  }

  cargarPasaje(id: string) {
    this.ventapasajeService.getunPasaje(id).subscribe(
      result => {
        this.accion = "update"
        Object.assign(this.pasaje, result)
        console.log(this.pasaje)
        this.pasaje.pasajero = this.Pasajero.find(a => (a._id == this.pasaje.pasajero._id))
        this.varconter = this.pasaje.categoriaPasajero = this.Categoria.find(cat => (cat == this.pasaje.categoriaPasajero))
        console.log(this.pasaje.categoriaPasajero)
      },
      err => {
      }
    )
  }

  modificarPasaje() {
    this.ventapasajeService.updatePasaje(this.pasaje).subscribe(
      result => {
        alert("el sector se agrego correcta mente")
        this.router.navigate(["punto3"])
        console.log(result)
        console.log(this.pasaje)
      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {


  }

}
