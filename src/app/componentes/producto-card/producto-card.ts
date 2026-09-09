import { Component, input } from '@angular/core'; // aqui se importa input

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
  nombre = input.required<string>(); // aqui se recibe el nombre desde el componente padre
  precio = input.required<number>(); // aqui se recibe el precio desde el componente padre
  imagen = input.required<string>(); // aqui se recibe la imagen desde el componente padre
}