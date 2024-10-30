import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    SharedModule
  ]
})
export class FormularioModule { }
