import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component {
  cantidad: number = 0;
  precio: number = 0;
  total: number = 0;

  calcularTotal() {
    this.total = this.cantidad * this.precio;
    if (this.total > 200) {
      this.total *= 0.8; // Aplicar 20% de descuento
    }
  }
}
