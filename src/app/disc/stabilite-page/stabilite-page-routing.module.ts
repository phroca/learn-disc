import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StabilitePagePage } from './stabilite-page.page';

const routes: Routes = [
  {
    path: '',
    component: StabilitePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StabilitePagePageRoutingModule {}
