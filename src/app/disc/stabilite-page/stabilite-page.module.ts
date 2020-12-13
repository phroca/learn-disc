import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StabilitePagePageRoutingModule } from './stabilite-page-routing.module';

import { StabilitePagePage } from './stabilite-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StabilitePagePageRoutingModule
  ],
  declarations: [StabilitePagePage]
})
export class StabilitePagePageModule {}
