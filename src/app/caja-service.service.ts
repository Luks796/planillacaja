import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CajaService {
  private readonly movimientoskey = 'movimientos';
  private readonly efectivokey = 'efectivo';
  movs: Array<any> = [];
  cash: Array<any> = [];

  constructor(private storage: Storage) { }

  async agregarMovimiento(value) {
    await this.getMovimientos().then(x => {
      x.push(value);
      this.storage.set(this.movimientoskey, x);
    });
  }

  async agregarBillete(value){
    await this.getEfectivo().then(x => {
      x.push(value);
      this.storage.set(this.efectivokey, x);
    })
  } 

  getMovimientos(): Promise<any> {
    return this.storage.get(this.movimientoskey);
  }

  getEfectivo(): Promise <any>{
    return this.storage.get(this.efectivokey);
  }

  reset() {
    this.storage.clear().then(() => this.storage.set(this.movimientoskey, []));
  }

  calculateCash(event, value) {
    var tot = event * value;
    this.cash.push(tot);    
    // return this.cash;
  }

  async sumarMovimientos(): Promise<number> {
    var suma = 0;
    await this.storage.get(this.movimientoskey).then((val) => {
      val.forEach(element => {
        if (element > 0) {
          suma += element;
        }
        else {
          suma += (element) - (element * 2);
        }
      });
    });
    return suma;
  }

  async sumarEfectivo(): Promise<number> {
    var suma = 0;
    await this.storage.get(this.efectivokey).then((val) => {
      val.forEach(element => { 
        suma += element;
      });
    });
    return suma;
  }

  getMovimientosEntradas(ventas) {
    this.getMovimientos().then((x) => {
      x.forEach(element => {
        if (element > 0) {
          ventas.push(element);
        }
      });
    });
  }

  getMovimientosSalidas(salidas) {
    this.getMovimientos().then((x) => {
      x.forEach(element => {
        if (element < 0) {
          salidas.push((element) - (element * 2));
        }
      });
    });
  }

  getSumaEntradas(ventas) {

  }

  getSumaSalidas(salidas) {

  }
}
