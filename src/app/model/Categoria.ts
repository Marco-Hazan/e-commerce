import { Prodotto } from "./prodotto";

export interface Categoria{
    id: number;
    nome: string;
    prodotti: Prodotto[];
    totItems: number;
}