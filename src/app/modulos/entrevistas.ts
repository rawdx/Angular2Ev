import { candidatos } from "./candidatos";
import { Entrevista } from "./entrevista";
import { Puesto } from "./puesto";
import { puestos } from "./puestos";

export const entrevistas:Entrevista[] = [
    {fecha:"1 de enero", candidato: candidatos[0], puesto:puestos[0], realizada: true},
    {fecha:"5 de diciembre", candidato: candidatos[1], puesto:puestos[3], realizada: false},
]