import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {
  usuarios = [
    { nombre: 'Edgar Gutierrez', correo: 'Edgardo@cafeteria.com', rol: 'Administrador', salario: '$9,500' },
    { nombre: 'Ana Torres', correo: 'ana@cafeteria.com', rol: 'Administrador', salario: '$8,200' },
    { nombre: 'Luis Perez', correo: 'luis.perez@mail.com', rol: 'Cliente', salario: '-' },
  ];
}