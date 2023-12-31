import {Image} from "./Image";
import { Universite } from "./Universite";

export class Foyer {
    idFoyer !: number;
    description !:string ;
    nomFoyer!: string;
    capaciteFoyer!: number;
    etat!:boolean;
    adresse!:string;
    createdAt!:Date;
    updatedAt!:Date;
    universite !: Universite ;
  imagebyte!:string ;
  image?: Image | null;
}