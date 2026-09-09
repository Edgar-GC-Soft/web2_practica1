import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // aqui se importan las herramientas de rutas de Angular

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive], // aqui se conectan con nav-bar.html
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {}