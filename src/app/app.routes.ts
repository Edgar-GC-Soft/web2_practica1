import { Routes } from '@angular/router';
import { Login } from './componentes/login/login'; // aqui se importa el componente login
import { Dashboard } from './componentes/dashboard/dashboard'; // aqui se importa el componente dashboard
import { Usuarios } from './componentes/usuarios/usuarios'; // aqui se importa el componente usuarios
import { Inventario } from './componentes/inventario/inventario'; // aqui se importa el componente inventario
import { Compras } from './componentes/compras/compras'; // aqui se importa el componente compras
import { Ventas } from './componentes/ventas/ventas'; // aqui se importa el componente ventas
import { Contabilidad } from './componentes/contabilidad/contabilidad'; // aqui se importa el componente contabilidad
import { Rh } from './componentes/rh/rh'; // aqui se importa el componente rh

export const routes: Routes = [
  { path: '', component: Login }, // aqui se enruta la raiz con el componente Login
  { path: 'login', component: Login }, // aqui se enruta /login con el componente Login
  { path: 'dashboard', component: Dashboard }, // aqui se enruta /dashboard con el componente Dashboard
  { path: 'usuarios', component: Usuarios }, // aqui se enruta /usuarios con el componente Usuarios
  { path: 'inventario', component: Inventario }, // aqui se enruta /inventario con el componente Inventario
  { path: 'compras', component: Compras }, // aqui se enruta /compras con el componente Compras
  { path: 'ventas', component: Ventas }, // aqui se enruta /ventas con el componente Ventas
  { path: 'contabilidad', component: Contabilidad }, // aqui se enruta /contabilidad con el componente Contabilidad
  { path: 'rh', component: Rh }, // aqui se enruta /rh con el componente Rh
  { path: '**', redirectTo: '' } // aqui se redirige cualquier ruta invalida a la raiz
];