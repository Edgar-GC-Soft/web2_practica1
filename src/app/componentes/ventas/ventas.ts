import { Component } from '@angular/core';
import { ProductoCard } from '../producto-card/producto-card';

@Component({
  selector: 'app-ventas',
  imports: [ProductoCard],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas {
  productos = [
    { nombre: 'Café americano', precio: 45, imagen: 'assets/cafe-americano.jpg' },
    { nombre: 'Cappuccino', precio: 55, imagen: 'assets/cappuccino.jpg' },
    { nombre: 'Pan de elote', precio: 38, imagen: 'assets/pan-elote.jpg' },
  ];

  detalle = [
    { producto: 'Café americano', cantidad: 2, subtotal: 90 },
    { producto: 'Pan de elote', cantidad: 1, subtotal: 38 },
  ];
}