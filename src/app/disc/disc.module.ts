import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscPage } from './disc.page';

import { DiscPageRoutingModule } from './disc-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DiscPageRoutingModule
  ],
  declarations: [DiscPage]
})
export class DiscPageModule {}
