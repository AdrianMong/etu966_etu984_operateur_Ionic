import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForfaitByTypePageRoutingModule } from './forfait-by-type-routing.module';
import { ForfaitByTypePage } from './forfait-by-type.page';
import { HeaderBackComponent } from '../../components/headerback/headerback.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForfaitByTypePageRoutingModule
  ],
  declarations: [ForfaitByTypePage,HeaderBackComponent],
  exports:[HeaderBackComponent],
})
export class ForfaitByTypePageModule {}
