import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from "./componentes/contador/contador";
import { Contagem } from './componentes/contagem/contagem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, Contagem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-contador-angular');
}
