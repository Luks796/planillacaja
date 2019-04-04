import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';
import { Billete } from '../billete';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public totales: number = 0;
  cantidad;
  valor;
  constructor(private service: CajaService) { }

  ngOnInit() {

    this.service.getEfectivo();
  }

  agregarBillete(valor: number, cantidad: number) {
    var cuentaDeBilletes: Billete = {
      cantidad: cantidad,
      valor: valor,
    };
    var total = cuentaDeBilletes.cantidad * cuentaDeBilletes.valor;
    console.log(total);
  }

  calcularEfectivo(event, value) {
    this.service.calculateCash(event.srcElement.value, value);
    this.service.sumarEfectivo().then((x) => this.totales = x);
  }

  alerta(event) {
    this.valor = event.detail.value;
    if (this.cantidad != undefined) {
      this.agregarBillete(this.valor, this.cantidad);
    }
  }
  keyup(cantidad) {
    if (this.valor != undefined) {
      this.agregarBillete(this.valor, cantidad);
    }
  }
}
