import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizElementComponent } from './quiz-element.component';

const routes: Routes = [
  {
    path: '',
    component: QuizElementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizElementRoutingModule {}
