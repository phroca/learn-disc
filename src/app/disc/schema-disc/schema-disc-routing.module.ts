import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemaDiscPage } from './schema-disc.page';

const routes: Routes = [
  {
    path: '',
    component: SchemaDiscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemaDiscPageRoutingModule {}
