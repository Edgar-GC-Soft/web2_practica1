import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Dashboard } from './componentes/dashboard/dashboard';
import { Usuarios } from './componentes/usuarios/usuarios';
import { Inventario } from './componentes/inventario/inventario';
import { Compras } from './componentes/compras/compras';
import { Ventas } from './componentes/ventas/ventas';
import { Contabilidad } from './componentes/contabilidad/contabilidad';
import { Rh } from './componentes/rh/rh';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'usuarios', component: Usuarios },
  { path: 'inventario', component: Inventario },
  { path: 'compras', component: Compras },
  { path: 'ventas', component: Ventas },
  { path: 'contabilidad', component: Contabilidad },
  { path: 'rh', component: Rh },
  { path: '**', redirectTo: '' }
];