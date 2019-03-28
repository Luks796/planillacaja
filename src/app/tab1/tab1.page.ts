import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ventas: Array<number> = [];
  venta: number;
  totalVentas;

  constructor(private service: CajaService) { }

  ngOnInit() {
    // this.service.getMovimientos().then((x) => {
    //   x.forEach(element => {
    //     if (element > 0) {
    //       this.ventas.push(element);
    //     }
    //   });
    // });
    this.service.getMovimientosEntradas(this.ventas);
    this.calcularTotal();
  }

  saveItem() {
    this.service.agregarMovimiento(this.venta).then(() => {
      this.ventas.push(this.venta);
      this.calcularTotal();
    });
  }

  calcularTotal() {
    // this.service.sumarMovimientos().then((x) => this.totalVentas = x);
    this.service.getSumaEntradas(this.ventas);
  }

  resetVentas() {
    this.service.reset();
    this.totalVentas = 0;
    this.ventas = [];
  }
}
