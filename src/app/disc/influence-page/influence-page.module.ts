import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfluencePagePageRoutingModule } from './influence-page-routing.module';

import { InfluencePagePage } from './influence-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfluencePagePageRoutingModule
  ],
  declarations: [InfluencePagePage]
})
export class InfluencePagePageModule {}
