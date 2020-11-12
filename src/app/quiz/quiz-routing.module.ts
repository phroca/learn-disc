import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPage } from './quiz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPage,
  },
  {
    path: 'quiz-element',
    loadChildren: () => import('../quiz/quiz-element/quiz-element.module').then(m => m.QuizElementModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizPageRoutingModule {}
