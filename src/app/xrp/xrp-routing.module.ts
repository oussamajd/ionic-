import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XrpPage } from './xrp.page';

const routes: Routes = [
  {
    path: '',
    component: XrpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XrpPageRoutingModule {}
