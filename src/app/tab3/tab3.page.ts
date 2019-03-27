import { Component } from '@angular/core';
import { CajaService } from '../caja-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page { 
  public _1000: number = 0;
  public _500: number = 0;
  public _200: number = 0;
  public _100: number = 0;
  public _50: number = 0;
  public _20: number = 0;
  public _10: number = 0;
  public _5: number = 0;
  public _2: number = 0;
  public _1: number = 0;
  public _0_5: number = 0;
  public _0_25: number = 0;  

  constructor(private service: CajaService) { }
  
  ngOnInit(){
    this.service.sumarMovimientos()
  }
}
