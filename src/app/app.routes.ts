import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'lista-compras', component: ListaComprasComponent },
];
