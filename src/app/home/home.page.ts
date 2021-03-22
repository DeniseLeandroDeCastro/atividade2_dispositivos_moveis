import { DespesaService } from './../model/despesa.service';
import { TipoDespesa } from './../model/tipodespesa';
import { Despesa } from './../model/despesa';
import { Component } from '@angular/core';
import { CategoriaDespesa } from '../model/categoriadespesa';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Faz a ligação com os elementos de entrada do formulário. 
  //Toast
  imgToast: HTMLElement;
  name: string;
  message: string;

  despesa: Despesa;
  tipos: string[];
  categorias: string[];
  adicionado: boolean;
  formGroup: FormGroup;

  constructor(private ds: DespesaService, public toastController: ToastController, public formBuilder: FormBuilder) {
    let data = new Date();
    this.despesa = new Despesa('', undefined, TipoDespesa.OUTRA, CategoriaDespesa.DIÁRIA, data.toISOString());
    this.tipos = Object.values(TipoDespesa);
    this.categorias = Object.values(CategoriaDespesa);
    this.adicionado = false;

    this.formGroup = formBuilder.group({
      motivoControl: ["", Validators.required],
      valorControl: ["", [Validators.required, Validators.min(0)]],
      tipoControl: ["", Validators.required],
      categoriaControl: ["", Validators.required],
      dataControl: ["", Validators.required]
    });
    
  }

  async adicionar() {
    const novaDespesa = new Despesa(
      this.despesa.motivo,
      this.despesa.valor,
      this.despesa.tipo,
      this.despesa.categoria,
      this.despesa.data);
    this.adicionado = this.ds.adicionar(novaDespesa);

    if(this.adicionado == true) {
      const toast = await this.toastController.create({
        message: 'Despesa adicionada com sucesso!',
        duration: 3000,
        color: 'success'  
      });
      toast.present();

    } else {
      const toast = await this.toastController.create({
        message: 'Erro ao adicionar a despesa!',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
