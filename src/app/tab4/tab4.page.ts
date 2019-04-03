import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  cambio = 0;
  totalVentas;
  subtotal;
  totalSalidas;
  total;
  totalEfectivo;
  constructor(private service: CajaService) { }

  ngOnInit() {
    this.service.getSumaSalidas().then((x) => this.totalSalidas = x);
    this.service.getSumaEntradas()
      .then((x) => this.totalVentas = x)
      .finally(() => {
        this.cierreTotales();
      });

    //this.service.getSumaEfectivo().then((x) => this.totalEfectivo = x);    
  }

  cierreTotales() {
    this.subtotal = this.cambio + this.totalVentas;
    this.total = this.subtotal - this.totalSalidas;
  }

  guardar() {
    this.service.agregarCambio(this.cambio).then((x) => {
      console.log(x);
      this.cambio = x;
    });
  }
}
