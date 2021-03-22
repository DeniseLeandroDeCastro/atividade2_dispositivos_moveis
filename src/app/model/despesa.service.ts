import { Despesa } from './despesa';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private despesas: Despesa[];

  constructor() {
    this.despesas = [];
  }

  adicionar(desp: Despesa): boolean {
    if (desp != undefined) {
      this.despesas.push(desp);
      return true;
    }
    return false;
  }

  obterTodas(): Despesa[] {
    return this.despesas;
  }
}
