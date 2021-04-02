import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulationDataPage } from './simulation-data.page';

const routes: Routes = [
  {
    path: '',
    component: SimulationDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationDataPageRoutingModule {}
