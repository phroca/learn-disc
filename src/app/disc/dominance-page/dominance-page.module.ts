import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominancePagePageRoutingModule } from './dominance-page-routing.module';

import { DominancePagePage } from './dominance-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominancePagePageRoutingModule
  ],
  declarations: [DominancePagePage]
})
export class DominancePagePageModule {}
