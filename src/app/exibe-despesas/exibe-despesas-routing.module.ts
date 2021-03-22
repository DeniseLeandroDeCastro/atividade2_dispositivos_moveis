import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExibeDespesasPage } from './exibe-despesas.page';

const routes: Routes = [
  {
    path: '',
    component: ExibeDespesasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExibeDespesasPageRoutingModule {}
