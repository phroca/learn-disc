import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { userInfoPage } from './user-info.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UserInfoPageRoutingModule } from './user-info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: userInfoPage }]),
    UserInfoPageRoutingModule,
  ],
  declarations: [userInfoPage]
})
export class UserInfoPageModule {}
