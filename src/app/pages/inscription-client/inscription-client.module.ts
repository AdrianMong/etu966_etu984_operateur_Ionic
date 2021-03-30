import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionClientPageRoutingModule } from './inscription-client-routing.module';

import { InscriptionClientPage } from './inscription-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionClientPageRoutingModule
  ],
  declarations: [InscriptionClientPage]
})
export class InscriptionClientPageModule {}
