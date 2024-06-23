import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrls: ['./pregunta4.component.css']
})
export class Pregunta4Component {
  horas: number = 0;
  salario: number = 0;

  calcularSalario() {
    if (this.horas <= 40) {
      this.salario = this.horas * 16;
    } else {
      this.salario = (40 * 16) + ((this.horas - 40) * 20);
    }
  }
}
