import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userInfoPage } from './user-info.page';

const routes: Routes = [
  {
    path: '',
    component: userInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInfoPageRoutingModule {}
