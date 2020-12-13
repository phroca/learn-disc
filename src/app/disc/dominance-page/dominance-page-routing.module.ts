import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominancePagePage } from './dominance-page.page';

const routes: Routes = [
  {
    path: '',
    component: DominancePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominancePagePageRoutingModule {}
