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
  
  constructor(private service: CajaService) { }
  
  ngOnInit(){  
    this.agregarBillete(2,2);
    this.service.getEfectivo();     
  }

  agregarBillete(cantidad: number, valor: number ){
  //   var  cuentaDeBilletes : Billete = {
  //     cantidad : cantidad,
  //     valor : valor,        
  //   };
  //  console.log(cuentaDeBilletes.total) ;
  }

  calcularEfectivo(event, value){    
    this.service.calculateCash(event.srcElement.value, value); 
    this.service.sumarEfectivo().then((x) => this.totales = x);
  }
}
