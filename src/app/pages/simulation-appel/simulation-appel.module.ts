import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulationAppelPageRoutingModule } from './simulation-appel-routing.module';

import { SimulationAppelPage } from './simulation-appel.page';

import { HeaderBackComponent } from '../../components/headerback/headerback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulationAppelPageRoutingModule
  ],
  declarations: [SimulationAppelPage,HeaderBackComponent],
  exports:[HeaderBackComponent]
})
export class SimulationAppelPageModule {}
