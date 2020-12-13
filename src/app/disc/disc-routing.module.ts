import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscPage } from './disc.page';

const routes: Routes = [
  {
    path: '',
    component: DiscPage,
  },
  {
    path: 'schema-disc',
    loadChildren: () => import('./schema-disc/schema-disc.module').then( m => m.SchemaDiscPageModule)
  },
  {
    path: 'dominance-page',
    loadChildren: () => import('./dominance-page/dominance-page.module').then( m => m.DominancePagePageModule)
  },
  {
    path: 'influence-page',
    loadChildren: () => import('./influence-page/influence-page.module').then( m => m.InfluencePagePageModule)
  },
  {
    path: 'stabilite-page',
    loadChildren: () => import('./stabilite-page/stabilite-page.module').then( m => m.StabilitePagePageModule)
  },
  {
    path: 'conformite-page',
    loadChildren: () => import('./conformite-page/conformite-page.module').then( m => m.ConformitePagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscPageRoutingModule {}
