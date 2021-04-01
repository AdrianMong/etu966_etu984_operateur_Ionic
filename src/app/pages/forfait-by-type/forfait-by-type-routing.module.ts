import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForfaitByTypePage } from './forfait-by-type.page';

const routes: Routes = [
  {
    path: '',
    component: ForfaitByTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForfaitByTypePageRoutingModule {}
