import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExibeDespesasPageRoutingModule } from './exibe-despesas-routing.module';

import { ExibeDespesasPage } from './exibe-despesas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibeDespesasPageRoutingModule
  ],
  declarations: [ExibeDespesasPage]
})
export class ExibeDespesasPageModule {}
