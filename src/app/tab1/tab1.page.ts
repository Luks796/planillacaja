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
  totalVentas : number = 0;  

  constructor(private service: CajaService) { }
  
  ngOnInit() {    
    this.service.getMovimientos().then(x => this.ventas = x);
  }

  saveItem() {
    this.service.agregarMovimiento(this.venta);
    this.ventas.push(this.venta);
    this.service.sumarMovimientos();
  }

  resetVentas(){
    this.service.reset();
    this.ventas = [];
  }
}
