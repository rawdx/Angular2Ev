import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosComponent } from './vistas/candidatos/candidatos.component';
import { EntrevistasComponent } from './vistas/entrevistas/entrevistas.component';
import { PuestosDisponiblesComponent } from './vistas/puestos-disponibles/puestos-disponibles.component';

const routes: Routes = [
  { path: 'candidatos', component: CandidatosComponent },
  { path: 'entrevistas', component: EntrevistasComponent },
  { path: 'puestos-disponibles', component: PuestosDisponiblesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
