import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
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
      cssbg: 'dominance-bg',
      icon: 'chevron-forward-outline',
      description: 'Personnalité sur la dominance',
      color: '#E63135'
    },
    {
      title: 'Influence',
      cssbg: 'influence-bg',
      icon: 'chevron-forward-outline',
      description: 'Personnalité sur l\'influence',
      color: '#0CA9EA'
    },
    {
      title: 'Stabilité',
      cssbg: 'stabilite-bg',
      icon: 'chevron-forward-outline',
      description: 'Personnalité sur la stabilité',
      color: '#F46529'
    },
    {
      title: 'Conformité',
      cssbg: 'conformite-bg',
      icon: 'chevron-forward-outline',
      description: 'Personnalité sur la conformité',
      color: '#FFD439'
    }
  ];

  discTitleDone: [
    {
      title: string,
      numberQuizzDone: number
    },
    {
      title: string,
      numberQuizzDone: number
    },
    {
      title: string,
      numberQuizzDone: number
    },
    {
      title: string,
      numberQuizzDone: number
    }
  ];

  discProgression: {
    progression: number,
    quizReussite: number,
    quizEchec: number,
    quizAbandonne: number
  };

  constructor(private navCtrl: NavController) {
    this.discProgression = {
      progression:  0,
      quizReussite: 0,
      quizEchec: 0,
      quizAbandonne: 0
    };

    this.discTitleDone = [
      {
        title: 'Dominance',
        numberQuizzDone: 0
      },
      {
        title: 'Influence',
        numberQuizzDone: 0
      },
      {
        title: 'Stabilité',
        numberQuizzDone: 0
      },
      {
        title: 'Conformité',
        numberQuizzDone: 0
      }
    ];
  }

  ngOnInit() {
    get('discProgression').then(value => {
      if (value) {
        this.discProgression = value;
      }
    });
    get('DiscTitleDone').then(value => {
      if (value) {
        this.discTitleDone = value;
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
    this.navCtrl.navigateForward('/tabs/quiz/quiz-content', navigationExtras);
  }

  enregistrerQuizzBdd(titre: string){
    const discElement = this.discTitleDone.find(element => element.title === titre);
    let titlenumber: number = discElement.numberQuizzDone;
    if (!titlenumber) {
      titlenumber = 0;
    }
    titlenumber++;
    discElement.numberQuizzDone = titlenumber;
    this.discProgression.progression++;
    set('DiscTitleDone', this.discTitleDone);
    set('discProgression', this.discProgression);
  }

}
