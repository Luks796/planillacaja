import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';
import { Tab1Page } from '../tab1/tab1.page';

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
  tab1: Tab1Page;
  constructor(private service: CajaService) { }

  ngOnInit() {
    this.service.getMovimientoCambio().then((x) => {
      this.cambio = x;
    });;
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
    this.guardarCambio();
  }

  guardarCambio() {
    this.service.agregarCambio(this.cambio).then(() => {
      this.service.getMovimientoCambio().then((x) => {
        this.cambio = x;
      });
    });
  }

  newDay(){
    this.service.reset();
    this.ngOnInit();
  }
}
