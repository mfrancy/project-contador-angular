import { Component } from '@angular/core';

@Component({
  selector: 'app-contagem',
  imports: [],
  templateUrl: './contagem.html',
  styleUrl: './contagem.css',
})
export class Contagem {
  valor: number = 0;

  adicionar() {
    this.valor = this.valor + 1;
    // return this.valor
  };

  diminuir() {
    this.valor = this.valor - 1;
  }
}
