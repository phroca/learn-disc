import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfluencePagePage } from './influence-page.page';

const routes: Routes = [
  {
    path: '',
    component: InfluencePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfluencePagePageRoutingModule {}
