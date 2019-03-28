import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  salida: number;
  salidas: Array<number> = [];
  totalSalidas;

  constructor(private service: CajaService) { }

  ngOnInit() {
    this.service.getMovimientosSalidas().then((x) => this.salidas = x);
    this.calcularTotal();
  }

  saveItem() {
    this.service.agregarMovimiento(-this.salida).then(() =>{
      this.salidas.push(this.salida);
      this.calcularTotal();
    });    
  }

  calcularTotal() {    
    this.service.getSumaSalidas().then((x) => this.totalSalidas = x);
  }

  resetSalidas() {
    this.service.reset();
    this.totalSalidas = 0;
    this.salida = 0;
    this.salidas = [];
  }
}
