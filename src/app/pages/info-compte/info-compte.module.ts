import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoComptePageRoutingModule } from './info-compte-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { InfoComptePage } from './info-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoComptePageRoutingModule
  ],
  declarations: [InfoComptePage,HeaderComponent],
  exports: [
    HeaderComponent
  ],
})
export class InfoComptePageModule {}
