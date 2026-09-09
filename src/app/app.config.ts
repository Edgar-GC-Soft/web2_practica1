import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router'; // aqui se importa la funcion de rutas

import { routes } from './app.routes'; // aqui se importa el arreglo de rutas

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes) // aqui se activan las rutas en toda la aplicacion
  ]
};