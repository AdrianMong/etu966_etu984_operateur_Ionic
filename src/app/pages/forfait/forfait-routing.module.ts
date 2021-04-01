import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForfaitPage } from './forfait.page';
import { HeaderBackComponent } from '../../components/headerback/headerback.component';

const routes: Routes = [
  {
    path: '',
    component: ForfaitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [HeaderBackComponent],
  exports: [RouterModule,HeaderBackComponent],

})
export class ForfaitPageRoutingModule {}
