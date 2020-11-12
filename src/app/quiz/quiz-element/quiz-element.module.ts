import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuizElementComponent } from '../quiz-element/quiz-element.component';
import { QuizElementRoutingModule } from './quiz-element-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QuizElementRoutingModule
  ],
  declarations: [QuizElementComponent]
})
export class QuizElementModule {}
