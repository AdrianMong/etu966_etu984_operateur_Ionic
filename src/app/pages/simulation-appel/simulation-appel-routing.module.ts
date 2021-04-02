import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulationAppelPage } from './simulation-appel.page';

const routes: Routes = [
  {
    path: '',
    component: SimulationAppelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationAppelPageRoutingModule {}
