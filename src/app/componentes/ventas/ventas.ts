import { Component } from '@angular/core';
import { ProductoCard } from '../producto-card/producto-card'; // aqui se importa el componente producto-card

@Component({
  selector: 'app-ventas',
  imports: [ProductoCard], // aqui se conecta con ventas.html
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas {
  productos = [ // aqui se guardan los datos que se mandan a producto-card
    { nombre: 'Café americano', precio: 45, imagen: 'imagenes/cafe-americano.jpg' },
    { nombre: 'Cappuccino', precio: 55, imagen: 'imagenes/cappuccino.jpg' },
    { nombre: 'Pan de elote', precio: 38, imagen: 'imagenes/pan-elote.jpg' },
  ];

  detalle = [
    { producto: 'Café americano', cantidad: 2, subtotal: 90 },
    { producto: 'Pan de elote', cantidad: 1, subtotal: 38 },
  ];
}