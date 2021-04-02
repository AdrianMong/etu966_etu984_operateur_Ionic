import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulationDataPageRoutingModule } from './simulation-data-routing.module';

import { SimulationDataPage } from './simulation-data.page';
import { HeaderBackComponent } from '../../components/headerback/headerback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulationDataPageRoutingModule
  ],
  declarations: [SimulationDataPage,HeaderBackComponent],
  exports: [HeaderBackComponent]
})
export class SimulationDataPageModule {}
