import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileMoneyPageRoutingModule } from './mobile-money-routing.module';

import { MobileMoneyPage } from './mobile-money.page';
import { HeaderComponent } from '../../components/header/header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileMoneyPageRoutingModule
  ],
  declarations: [MobileMoneyPage,HeaderComponent],
  exports: [HeaderComponent]
})
export class MobileMoneyPageModule {}
