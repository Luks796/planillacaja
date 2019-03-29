import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  venta: number;
  ventas: Array<number> = [];
  totalVentas;

  constructor(private service: CajaService) { }

  ngOnInit() {    
    this.service.getMovimientosEntradas().then((x) => this.ventas= x );
    this.calcularTotal();
  }

  saveItem() {
    if (this.isValidForm()){
      this.service.agregarMovimiento(this.venta).then(() => {
        this.ventas.push(this.venta);
        this.calcularTotal();
      });
    }
  }

  calcularTotal() {    
    this.service.getSumaEntradas().then((x) => this.totalVentas = x);
  }

  resetVentas() {
    this.service.reset();
    this.totalVentas = 0;
    this.venta = 0;
    this.ventas = [];
  }

  isValidForm(){
    if(this.venta <= 0){
      return false;
    }
    else {
      return true;
    }
  }
}
