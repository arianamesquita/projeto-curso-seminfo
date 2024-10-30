import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '', 
    component: HomeComponent,
    children: [
      {path: 'home', loadChildren: () => import('../formulario/formulario.module').then(m => m.FormularioModule)},
      {path: 'tabela', loadChildren: () => import('../tabela/tabela.module').then(m => m.TabelaModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
