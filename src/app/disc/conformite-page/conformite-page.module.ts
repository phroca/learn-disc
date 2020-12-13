import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConformitePagePageRoutingModule } from './conformite-page-routing.module';

import { ConformitePagePage } from './conformite-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConformitePagePageRoutingModule
  ],
  declarations: [ConformitePagePage]
})
export class ConformitePagePageModule {}
