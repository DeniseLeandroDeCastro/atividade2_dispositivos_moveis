import { CategoriaDespesa } from './categoriadespesa';
import { TipoDespesa } from './tipodespesa';
export class Despesa {
    motivo: string;
    valor: number;
    tipo: TipoDespesa;
    categoria: CategoriaDespesa;
    data: string; //ISOString para data

    constructor(id: string, val: number, tp: TipoDespesa, cat: CategoriaDespesa, data: string) {
        this.motivo = id;
        this.valor = val;
        this.tipo = tp;
        this.categoria = cat;
        this.data = data;
    }
}