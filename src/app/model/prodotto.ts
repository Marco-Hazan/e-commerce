import { Categoria } from "./Categoria";

export interface Prodotto{
    id?: number;
    nome:string;
    descrizione:string;
    taglia:number;
    prezzo:number;
    immagine: string;
    categoria? : Categoria;
}