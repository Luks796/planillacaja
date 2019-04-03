import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CajaService {
  private readonly movimientoskey = 'movimientos';
  private readonly efectivokey = 'efectivo';
  private readonly cambiokey = 'cambio';
  cash: Array<any> = [];

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.storage.get(this.movimientoskey).then((x) => {
      if (x == null) {
        this.storage.set(this.movimientoskey, []).then(() => {
          this.storage.get(this.movimientoskey);
        });
      }
    });
  }

  async agregarCambio(value){
    await this.getCambio()
      .then(() => {
        this.storage.set(this.cambiokey, value);
      });
    this.storage.get(this.cambiokey).then((x) => {
      return x;
    })
  }

  async agregarMovimiento(value) {
    await this.getMovimientos().then(x => {
      x.push(value);
      this.storage.set(this.movimientoskey, x);
    });
  }

  async agregarBillete(value) {
    await this.getEfectivo().then((x) => {
      x.push(value);
      this.storage.set(this.efectivokey, x);
    });
  }

  getCambio(): Promise<any> {
    return this.storage.get(this.cambiokey);
  }

  getMovimientos(): Promise<any> {
    return this.storage.get(this.movimientoskey);
  }

  getEfectivo(): Promise<any> {
    return this.storage.get(this.efectivokey);
  }

  reset() {
    this.storage.clear().then(() => this.storage.set(this.movimientoskey, []));
  }

  calculateCash(event, value) {
    this.cash.push(event * value);
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
      if (val == null) {
        this.init();
      }
      else {
        val.forEach(element => {
          suma += element;
        });
      }
    });
    return suma;
  }

  async getMovimientosEntradas() {
    var ventas = [];
    await this.getMovimientos().then((x) => {
      if (x == null) {
        this.init();
      }
      else {
        x.forEach(element => {
          if (element > 0) {
            ventas.push(element);
          }
        });
      }
    });
    return ventas;
  }

  async getMovimientosSalidas() {
    var salidas = [];
    await this.getMovimientos().then((x) => {
      if (x == null) {
        this.init();
      }
      else {
        x.forEach(element => {
          if (element < 0) {
            salidas.push((element) - (element * 2));
          }
        });
      }
    });
    return salidas;
  }

  async getSumaEntradas() {
    var suma = 0;
    await this.storage.get(this.movimientoskey).then((val) => {
      if (val == null) {
        this.init();
      }
      else {
        val.forEach(element => {
          if (element > 0) {
            suma += element;
          }
        });
      }
    });
    return suma;
  }

  async getSumaSalidas() {
    var suma = 0;
    await this.storage.get(this.movimientoskey).then((val) => {
      val.forEach(element => {
        if (element < 0) {
          suma += (element) - (element * 2);
        }
      });
    });
    return suma;
  }
}
