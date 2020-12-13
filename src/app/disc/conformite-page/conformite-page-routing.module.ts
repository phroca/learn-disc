import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConformitePagePage } from './conformite-page.page';

const routes: Routes = [
  {
    path: '',
    component: ConformitePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConformitePagePageRoutingModule {}
