import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComptePage } from './info-compte.page';

const routes: Routes = [
  {
    path: '',
    component: InfoComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoComptePageRoutingModule {}
