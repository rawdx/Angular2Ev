import { Component } from '@angular/core';
import { Entrevista } from 'src/app/modulos/entrevista';
import { entrevistas } from 'src/app/modulos/entrevistas';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent {
  listaEntrevistas:Entrevista[] = entrevistas;
}
