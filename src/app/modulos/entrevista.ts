import { Candidato } from "./candidato";
import { Puesto } from "./puesto";

export interface Entrevista {
    fecha:string;
    candidato:Candidato;
    puesto:Puesto;
    realizada:boolean;
}