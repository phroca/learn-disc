import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPage } from './quiz.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPage,
  },
  {
    path: 'quiz-content',
    loadChildren: () => import('./quiz-content/quiz-content.module').then( m => m.QuizContentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizPageRoutingModule {}
