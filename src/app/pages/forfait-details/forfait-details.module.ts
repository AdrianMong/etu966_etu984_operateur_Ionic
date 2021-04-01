import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForfaitDetailsPageRoutingModule } from './forfait-details-routing.module';

import { ForfaitDetailsPage } from './forfait-details.page';
import { HeaderBackComponent } from '../../components/headerback/headerback.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForfaitDetailsPageRoutingModule
  ],
  declarations: [ForfaitDetailsPage,HeaderBackComponent],
  exports: [HeaderBackComponent]
})
export class ForfaitDetailsPageModule {}
