import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import {  NavController } from '@ionic/angular';


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
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  gotoquiz(quizTitle: string) {
    const quiz = this.quizList.find(elt => elt.title === quizTitle);
    const navigationExtras: NavigationExtras = {
      state: {
        quizName: quiz.title
      }
    };
    this.navCtrl.navigateForward('/tabs/quiz/quiz-element', navigationExtras);
  }

}
