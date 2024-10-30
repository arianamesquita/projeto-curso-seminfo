import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaRoutingModule } from './tabela-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TabelaComponent } from './components/tabela/tabela.component';


@NgModule({
  declarations: [
    TabelaComponent
  ],
  imports: [
    CommonModule,
    TabelaRoutingModule,
    SharedModule
  ]
})
export class TabelaModule { }
