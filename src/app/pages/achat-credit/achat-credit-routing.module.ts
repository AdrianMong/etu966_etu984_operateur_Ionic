import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatCreditPage } from './achat-credit.page';

const routes: Routes = [
  {
    path: '',
    component: AchatCreditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatCreditPageRoutingModule {}
