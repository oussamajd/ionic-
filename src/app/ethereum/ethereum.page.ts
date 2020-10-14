import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoCoin } from '../models/crypto-coin';
import { CoingeckoConsumerService } from '../services/coingecko-consumer.service';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.page.html',
  styleUrls: ['./ethereum.page.scss'],
})
export class EthereumPage implements OnInit {

  selectedFiat = 'USD';
  fiats = ['USD', 'EUR', 'GBP', 'JPY'];
  bitcoin$: CryptoCoin;
  constructor(private coinProvider: CoingeckoConsumerService) {}

  async ngOnInit(){
    this.changeFiat();
    console.log('bit', this.bitcoin$);
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat, 'ethereum').toPromise();
  }

  async changeFiat(){
    let d = await this.callService();
    this.bitcoin$ = d[0];
  }


}
