import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoCoin } from '../models/crypto-coin';
import { CoingeckoConsumerService } from '../services/coingecko-consumer.service';

@Component({
  selector: 'app-xrp',
  templateUrl: './xrp.page.html',
  styleUrls: ['./xrp.page.scss'],
})
export class XrpPage implements OnInit {

  selectedFiat = 'USD';
  fiats = ['USD', 'EUR', 'GBP', 'JPY'];
  bitcoin$: CryptoCoin;
  constructor(private coinProvider: CoingeckoConsumerService) {}

  async ngOnInit(){
    this.changeFiat();
    console.log('bit', this.bitcoin$);
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat, 'ripple').toPromise();
  }

  async changeFiat(){
    let d = await this.callService();
    this.bitcoin$ = d[0];
  }


}
