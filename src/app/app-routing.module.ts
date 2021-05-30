import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto2FormComponent } from './components/punto2-form/punto2-form.component';

const routes: Routes = [
  { path: 'punto3', component: Punto3Component },
  { path: 'punto3pasaje', component: Punto3FormComponent },
  { path: 'punto3pasaje/:id', component: Punto3FormComponent },
  { path: 'punto1', component: Punto1FormComponent },
  { path: 'punto1-form', component: Punto1Component },
  { path: 'punto2', component: Punto2Component },
  { path: 'punto2-form', component: Punto2FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
