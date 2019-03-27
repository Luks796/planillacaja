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
  totalSalidas: number = 0;

  constructor(private service: CajaService) { }

  ngOnInit() {
    this.service.getMovimientos().then(x => this.salidas = x)
  }

  saveItem() {
    this.service.agregarMovimiento(this.salida);
    this.salidas.push(this.salida);    
  }

  resetSalidas(){
    this.service.reset();
    this.salidas = [];
  }
}
