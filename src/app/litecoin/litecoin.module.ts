import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LitecoinPageRoutingModule } from './litecoin-routing.module';

import { LitecoinPage } from './litecoin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LitecoinPageRoutingModule
  ],
  declarations: [LitecoinPage]
})
export class LitecoinPageModule {}
