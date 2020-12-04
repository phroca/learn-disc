import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { timeStamp } from 'console';
import { get, set } from '../services/storage.service';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss']
})
export class QuizPage implements OnInit{
  quizList = [
    {
      title: 'Dominance',
      icon: 'chevron-forward-circle-outline',
      description: 'Personnalité sur la dominance',
      color: '#E63135'
    },
    {
      title: 'Influence',
      icon: 'chevron-forward-circle-outline',
      description: 'Personnalité sur l\'influence',
      color: '#0CA9EA'
    },
    {
      title: 'Stabilité',
      icon: 'chevron-forward-circle-outline',
      description: 'Personnalité sur la stabilité',
      color: '#F46529'
    },
    {
      title: 'Conformité',
      icon: 'chevron-forward-circle-outline',
      description: 'Personnalité sur la conformité',
      color: '#FFD439'
    }
  ];
  nombreQuizzText: number;
  TotalQuiz: number;
  constructor(private navCtrl: NavController) {
    this.nombreQuizzText = 0;
    this.TotalQuiz = 0;
   }

  ngOnInit() {
    get('Progression').then(value => {
      if (value) {
        this.TotalQuiz = value;
      }
    });
  }

  gotoquiz(quizTitle: string) {
    const quiz = this.quizList.find(elt => elt.title === quizTitle);
    const navigationExtras: NavigationExtras = {
      state: {
        quizName: quiz.title
      }
    };
    this.enregistrerQuizzBdd(quiz.title);
    this.navCtrl.navigateForward('/tabs/quiz/quiz-element', navigationExtras);
  }

  enregistrerQuizzBdd(titre: string){
    get(titre).then(value => {
      if (value) {
        this.nombreQuizzText = value + 1;
      } else {
        this.nombreQuizzText++;
      }
      set(titre, this.nombreQuizzText);
    });
    this.TotalQuiz++;
    set('Progression', this.TotalQuiz);
  }

}
