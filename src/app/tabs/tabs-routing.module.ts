import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'disc',
        loadChildren: () => import('../disc/disc.module').then(m => m.DiscPageModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('../quiz/quiz.module').then(m => m.QuizPageModule)
      },
      {
        path: 'user-info',
        loadChildren: () => import('../user-info/user-info.module').then(m => m.UserInfoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/disc',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/disc',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
