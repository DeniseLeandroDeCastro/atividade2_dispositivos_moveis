import { DespesaService } from './../model/despesa.service';
import { Despesa } from './../model/despesa';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-despesas',
  templateUrl: './exibe-despesas.page.html',
  styleUrls: ['./exibe-despesas.page.scss'],
})
export class ExibeDespesasPage implements OnInit {
  despesas: Despesa[];

  constructor(private ds: DespesaService) { }

  ngOnInit() {
    this.despesas = this.ds.obterTodas();
  }

}
