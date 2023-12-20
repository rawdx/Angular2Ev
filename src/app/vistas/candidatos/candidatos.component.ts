import { Component } from '@angular/core';
import { Candidato } from 'src/app/modulos/candidato';
import { candidatos } from 'src/app/modulos/candidatos';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent {
  listaCandidatos: Candidato[] = candidatos;
}
