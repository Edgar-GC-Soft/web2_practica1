import { Component, input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  nombre = input.required<string>();
  precio = input.required<number>();
  imagen = input.required<string>();
}