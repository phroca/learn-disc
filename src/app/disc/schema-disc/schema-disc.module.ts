import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemaDiscPageRoutingModule } from './schema-disc-routing.module';

import { SchemaDiscPage } from './schema-disc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemaDiscPageRoutingModule
  ],
  declarations: [SchemaDiscPage]
})
export class SchemaDiscPageModule {}
