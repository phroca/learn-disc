import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInfoPage } from './user-info.page';

import { UserInfoPageRoutingModule } from './user-info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UserInfoPage }]),
    UserInfoPageRoutingModule,
  ],
  declarations: [UserInfoPage]
})
export class UserInfoPageModule {}
