import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1 = signal<number | null> (null);
  numero2 = signal<number | null> (null);
  resultado = signal<number | null> (null);
  mostrarResultado = computed(() => this.resultado() !== null);

  soma() {
    const n1 = this.numero1() ?? 0;
    const n2 = this.numero2() ?? 0;
    this.resultado.set(n1 + n2);
  }
}
