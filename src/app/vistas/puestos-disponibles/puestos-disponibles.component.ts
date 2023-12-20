import { Component } from '@angular/core';
import { Puesto } from 'src/app/modulos/puesto';
import { puestos } from 'src/app/modulos/puestos';

@Component({
  selector: 'app-puestos-disponibles',
  templateUrl: './puestos-disponibles.component.html',
  styleUrls: ['./puestos-disponibles.component.css']
})
export class PuestosDisponiblesComponent {
  listaPuestos: Puesto[] = puestos;
}
