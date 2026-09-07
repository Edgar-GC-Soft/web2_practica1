import { Component } from '@angular/core';

@Component({
  selector: 'app-compras',
  imports: [],
  templateUrl: './compras.html',
  styleUrl: './compras.css'
})
export class Compras {
  detalle = [
    { producto: 'Leche entera 1L', cantidad: 40, subtotal: 960 },
    { producto: 'Jarabe de vainilla', cantidad: 10, subtotal: 600 },
  ];
}