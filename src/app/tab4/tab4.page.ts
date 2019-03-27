import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  cambio: number;
  totalVentas;
  totalSalidas;
  subtotal;
  total;
  totalEfectivo;
  constructor(private service: CajaService) { }

  ngOnInit() {
    
  }
}
