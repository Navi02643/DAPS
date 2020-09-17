import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit {
  @Input() minimo: number;
  @Input() maximo: number;
  actual: number;
  actual2: number;

  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
    this.actual2 = this.minimo;
  }

  incrementar() {
    if (this.actual < this.maximo){
      this.actual++;
    }
  }

  decrementar() {
    if (this.actual > this.minimo){
      this.actual--;
    }
  }

  fijar(v:number) {
    if (v>=this.minimo && v<=this.maximo){
      this.actual = v;
    }
  }

  incrementar2() {
    if (this.actual2 < this.maximo){
      this.actual2++;
    }
  }

  decrementar2() {
    if (this.actual2 > this.minimo){
      this.actual2--;
    }
  }

  fijar2(v:number) {
    if (v>=this.minimo && v<=this.maximo){
      this.actual2 = v;
    }
  }
}
