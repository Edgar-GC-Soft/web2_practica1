import { Component } from '@angular/core';

@Component({
  selector: 'app-inventario',
  imports: [],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class Inventario {
  productos = [
    { nombre: 'Café americano 500g', costoCompra: 95, costoVenta: 180, stock: 42, bajo: false },
    { nombre: 'Leche entera 1L', costoCompra: 24, costoVenta: null, stock: 6, bajo: true },
    { nombre: 'Vaso desechable 16oz', costoCompra: 1.2, costoVenta: null, stock: 310, bajo: false },
    { nombre: 'Jarabe de vainilla', costoCompra: 60, costoVenta: null, stock: 3, bajo: true },
  ];
}