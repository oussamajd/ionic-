import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LitecoinPage } from './litecoin.page';

const routes: Routes = [
  {
    path: '',
    component: LitecoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LitecoinPageRoutingModule {}
