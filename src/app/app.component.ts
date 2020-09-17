import { Component, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Practica 4
  title = 'Interpolación en los archivos HTML de Angular';
  nombre = 'Carlos Ivan Mercado MArin';
  edad = 20;
  email = 'karlos123jun@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  // Practica 5
  title2 = 'Directivas *ngIf y *ngFor';
  nombre2 = 'Rodriguez Pablo';
  edad2 = 40;
  sueldos2 = [1700, 1600, 1900];
  // Practica 6
  title3 = 'Captura de eventos';
  contador = 1;
  // Practica 7
  title4 = 'Directiva ngModel';
  nombre3 = '';
  apellido = '';
  // Practica 8
  title5 = 'Componentes: creación';
  // Practica 9
  title6 = 'Componentes: pasar datos de la componente padre a la componente hija';
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string;
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }
  // Practica 10
  title7 = 'Componentes: disparo de eventos de la componente hija a la componente padre';
  mensaje='';
  // Practica 11
  title8 = 'Componentes: llamar a métodos de la componente hija desde el template del padre';
  // Practica 12
  title9 = 'Componentes: llamar a métodos de la componente hija desde la clase padre';
  @ViewChild('selector1') selector1: SelectornumericoComponent;
  @ViewChild('selector2') selector2: SelectornumericoComponent;
  // Practica 13
  title10 = 'Componentes: enlace de propiedades (Property Binding)';
  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];


  // Practica 4
  esActivo(){
    if (this.activo){
      return 'Trabajador Activo';
    }else{
      return 'Trabajador Inactivo';
  }}

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++){
      suma += this.sueldos[x];
    }
    return suma;
  }

  // Practica 6
  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  // Practica 9
  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3){
      this.resultado = 'Ganó';
    }else{
      this.resultado = 'Perdió';
    }
  }
  // Practica 10
  actualizar(t) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
  // Practica 12
  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }
}
