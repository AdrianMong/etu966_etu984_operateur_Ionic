import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulationSMSPage } from './simulation-sms.page';

const routes: Routes = [
  {
    path: '',
    component: SimulationSMSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationSMSPageRoutingModule {}
