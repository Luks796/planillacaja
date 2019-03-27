import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CajaService {
  private readonly movimientos;
  movs: Array<any> = [];
  suma: number = 0;

  constructor(private storage: Storage) { }

  agregarMovimiento(value) {
    this.getMovimientos().then(x => {
      x.push(value);
      this.storage.set('movimientos', x);
    });
  }

  getMovimientos(): Promise<any> {
    return this.storage.get('movimientos');
  }

  reset(){
    this.storage.clear().then(() => this.storage.set('movimientos', []));
  }

  sumarMovimientos(): number {
    return 0;
    // this.storage.get('movimientos').then((val) => {
    //   val.forEach(element => {
    //     this.suma += element;
        
    //   });
    // });    
    // console.log(this.suma);
    // return this.suma;
  }
}
