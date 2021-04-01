import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForfaitDetailsPage } from './forfait-details.page';

const routes: Routes = [
  {
    path: '',
    component: ForfaitDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForfaitDetailsPageRoutingModule {}
