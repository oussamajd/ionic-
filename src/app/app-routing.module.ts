import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ethereum',
    loadChildren: () => import('./ethereum/ethereum.module').then( m => m.EthereumPageModule)
  },
  {
    path: 'litecoin',
    loadChildren: () => import('./litecoin/litecoin.module').then( m => m.LitecoinPageModule)
  },
  {
    path: 'xrp',
    loadChildren: () => import('./xrp/xrp.module').then( m => m.XrpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
