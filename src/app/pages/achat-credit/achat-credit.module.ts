import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatCreditPageRoutingModule } from './achat-credit-routing.module';

import { AchatCreditPage } from './achat-credit.page';
import { HeaderBackComponent } from '../../components/headerback/headerback.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatCreditPageRoutingModule,
  ],
  declarations: [AchatCreditPage,HeaderBackComponent],
  exports: [HeaderBackComponent]
})
export class AchatCreditPageModule {}
