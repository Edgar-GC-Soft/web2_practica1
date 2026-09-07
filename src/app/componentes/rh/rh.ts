import { Component } from '@angular/core';

@Component({
  selector: 'app-rh',
  imports: [],
  templateUrl: './rh.html',
  styleUrl: './rh.css'
})
export class Rh {
  asistencias = [
    { nombre: 'Edgar Gutierrez', llegada: '08:02', salida: '-' },
    { nombre: 'Ana Torres', llegada: '08:10', salida: '16:05' },
  ];

  nominas = [
    { nombre: 'Edgar Gutierrez', fechaPago: '15/08/2026', monto: 9500 },
    { nombre: 'Ana Torres', fechaPago: '15/08/2026', monto: 8200 },
  ];
}