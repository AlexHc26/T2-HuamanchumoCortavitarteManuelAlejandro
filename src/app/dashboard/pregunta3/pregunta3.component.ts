import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css']
})
export class Pregunta3Component {
  monto: number = 0;
  cuotas: number = 0;
  interes: number = 0;
  total: number = 0;
  montoCuota: number = 0;

  calcularCuotas() {
    if (this.monto > 5000) {
      this.cuotas = 3;
      this.interes = 0.10;
    } else if (this.monto < 1000) {
      this.cuotas = 1;
      this.interes = 0.12;
    } else if (this.monto >= 1000 && this.monto <= 5000) {
      this.cuotas = 2;
      this.interes = 0.12;
    } else {
      this.cuotas = 5;
      this.interes = 0.12;
    }

    this.total = this.monto * (1 + this.interes);
    this.montoCuota = this.total / this.cuotas;
  }
}
