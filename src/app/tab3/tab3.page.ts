import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';
import { Billete } from '../billete';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {  
  public total: number = 0;
  billetes : Billete [];

  constructor(private service: CajaService) { }
  
  ngOnInit(){    
    this.service.getEfectivo();     
  }

  calcularEfectivo(event, value){    
    this.service.calculateCash(event.srcElement.value, value); 
    this.service.sumarEfectivo().then((x) => this.total = x);
  }
}
