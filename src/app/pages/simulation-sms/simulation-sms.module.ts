import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulationSMSPageRoutingModule } from './simulation-sms-routing.module';

import { SimulationSMSPage } from './simulation-sms.page';
import { HeaderBackComponent } from '../../components/headerback/headerback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulationSMSPageRoutingModule
  ],
  declarations: [SimulationSMSPage,HeaderBackComponent],
  exports: [HeaderBackComponent]
})
export class SimulationSMSPageModule {}
