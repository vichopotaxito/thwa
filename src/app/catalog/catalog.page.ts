import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage {
  catalogo: any[] = []; // Define una lista de productos en tu catálogo
  carrito: any[] = []; // Define una lista de productos en el carrito

  servicio1: any = {
    nombre: 'Nombre del Servicio 1',
    descripcion: 'Descripción del Servicio 1',
    precio: 100.00,
    imagen: './assets/xd.jpg'
  };

  servicio2: any = {
    nombre: 'Nombre del Servicio 2',
    descripcion: 'Descripción del Servicio 2',
    precio: 150.00,
    imagen: './assets/luffy.jpg'
  };

  constructor() {
    // Aquí puedes inicializar tu catálogo, por ejemplo:
    this.catalogo = [
      {
        nombre: 'Nombre del Servicio 3',
        descripcion: 'Descripción del Servicio 3',
        precio: 200.00,
        imagen: './assets/servicio3.jpg'
      },
      {
        nombre: 'Nombre del Servicio 4',
        descripcion: 'Descripción del Servicio 4',
        precio: 250.00,
        imagen: './assets/servicio4.jpg'
      },
      // Agrega más productos aquí
    ];
  }

  agregarAlCarrito(producto: any) {
    // Agregar un producto al carrito cuando se hace clic en un botón
    this.carrito.push(producto);
  }
}
