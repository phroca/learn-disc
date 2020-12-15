import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { InfosQuestionnaire } from '../model/infos-questionnaire';
import { get, remove } from '../services/storage.service';

@Component({
  selector: 'app-user-info',
  templateUrl: 'user-info.page.html',
  styleUrls: ['user-info.page.scss']
})
export class UserInfoPage implements OnInit{
  @ViewChild('pieChart') pieChart;
  @ViewChild('barChartDominance') barChartDominance;
  @ViewChild('barChartInfluence') barChartInfluence;
  @ViewChild('barChartStabilite') barChartStabilite;
  @ViewChild('barChartConformite') barChartConformite;
  pie: any;
  hrzBarsD: any;
  hrzBarsI: any;
  hrzBarsS: any;
  hrzBarsC: any;
  colorArray: any;
  numberDominanceQuiz: number;
  numberInfluenceQuiz: number;
  numberStabiliteQuiz: number;
  numberConformiteQuiz: number;
  infosDominanceQuiz: InfosQuestionnaire;
  infosInfluenceQuiz: InfosQuestionnaire;
  infosStabiliteQuiz: InfosQuestionnaire;
  infosConformiteQuiz: InfosQuestionnaire;
  progressionTotale: number;
  quizReussite: number;
  quizEchec: number;
  quizAbandonne: number;
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

  remarqueNombreVictoireDefaite: string;
  remarqueRepartition: string;
  remarqueDominance: string;
  remarqueInfluence: string;
  remarqueStabilite: string;
  remarqueConformite: string;

  constructor(public alertController: AlertController, public loadingController: LoadingController,
              public toastController: ToastController, private router: Router) {
    this.numberDominanceQuiz = 0;
    this.numberInfluenceQuiz = 0;
    this.numberStabiliteQuiz = 0;
    this.numberConformiteQuiz = 0;
    this.infosDominanceQuiz = new InfosQuestionnaire();
    this.infosInfluenceQuiz = new InfosQuestionnaire();
    this.infosStabiliteQuiz = new InfosQuestionnaire();
    this.infosConformiteQuiz = new InfosQuestionnaire();
    this.progressionTotale = 0;
    this.quizReussite = 0;
    this.quizEchec = 0;
    this.quizAbandonne = 0;
    this.remarqueNombreVictoireDefaite = '';
    this.remarqueRepartition = '';
    this.remarqueDominance = '';
    this.remarqueInfluence = '';
    this.remarqueStabilite = '';
    this.remarqueConformite = '';
    this.discProgression = {
      progression : 0,
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

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    get('DiscTitleDone').then ( value => {
      if (value) {
        this.discTitleDone = value;
        this.numberDominanceQuiz = this.discTitleDone.find( element => element.title === 'Dominance').numberQuizzDone;
        this.numberInfluenceQuiz = this.discTitleDone.find( element => element.title === 'Influence').numberQuizzDone;
        this.numberStabiliteQuiz = this.discTitleDone.find( element => element.title === 'Stabilité').numberQuizzDone;
        this.numberConformiteQuiz = this.discTitleDone.find( element => element.title === 'Conformité').numberQuizzDone;
      }
      this.createPieChart();
      this.genererRemarquesRepartition();
    });
    get('discProgression').then(value => {
      if (value) {
        this.discProgression = value;
      }
      this.progressionTotale = this.discProgression.progression ? this.discProgression.progression : 0;
      this.quizReussite = this.discProgression.quizReussite ? this.discProgression.quizReussite : 0;
      this.quizEchec = this.discProgression.quizEchec ? this.discProgression.quizEchec : 0;
      this.quizAbandonne = this.discProgression.quizAbandonne ? this.discProgression.quizAbandonne : 0;
      this.genererRemarquesProgression();
    });
    get('infos-Dominance').then(value => { if (value){ this.infosDominanceQuiz = value; } this.createBarChartDominance(); });
    get('infos-Influence').then(value => { if (value){ this.infosInfluenceQuiz = value;  } this.createBarChartInfluence(); });
    get('infos-Stabilité').then(value => { if (value){ this.infosStabiliteQuiz = value;  } this.createBarChartStabilite(); });
    get('infos-Conformité').then(value => { if (value){ this.infosConformiteQuiz = value;  } this.createBarChartConformite(); });
  }

  createBarChartDominance() {
    // Repartition des reponses pour le questionnaire sur la Dominance
    this.hrzBarsD = new Chart(this.barChartDominance.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Point d\'appui', 'Limites', 'Besoins', 'Moteurs', 'Peur', 'Irrité par', 'Sous stress'],
        datasets: [{
          label: 'nombre de bonnes réponses',
          data: [this.infosDominanceQuiz.reponsePointAppui.bonne,
            this.infosDominanceQuiz.reponseLimites.bonne,
            this.infosDominanceQuiz.reponseBesoins.bonne,
            this.infosDominanceQuiz.reponseMoteurs.bonne,
            this.infosDominanceQuiz.reponsePeur.bonne,
            this.infosDominanceQuiz.reponseIrritePar.bonne,
            this.infosDominanceQuiz.reponseSousStress.bonne
          ],
          backgroundColor: 'darkgreen',
          borderColor: 'darkgreen',
          borderWidth: 1
        },
        {
          label: 'nombre de mauvaises réponses',
          data: [this.infosDominanceQuiz.reponsePointAppui.mauvaise,
            this.infosDominanceQuiz.reponseLimites.mauvaise,
            this.infosDominanceQuiz.reponseBesoins.mauvaise,
            this.infosDominanceQuiz.reponseMoteurs.mauvaise,
            this.infosDominanceQuiz.reponsePeur.mauvaise,
            this.infosDominanceQuiz.reponseIrritePar.mauvaise,
            this.infosDominanceQuiz.reponseSousStress.mauvaise
          ],
          backgroundColor: 'darkred',
          borderColor: 'darkred',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  createBarChartInfluence() {
    // Repartition des reponses pour le questionnaire sur la Influence
    this.hrzBarsI = new Chart(this.barChartInfluence.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Point d\'appui', 'Limites', 'Besoins', 'Moteurs', 'Peur', 'Irrité par', 'Sous stress'],
        datasets: [{
          label: 'nombre de bonnes réponses',
          data: [this.infosInfluenceQuiz.reponsePointAppui.bonne,
            this.infosInfluenceQuiz.reponseLimites.bonne,
            this.infosInfluenceQuiz.reponseBesoins.bonne,
            this.infosInfluenceQuiz.reponseMoteurs.bonne,
            this.infosInfluenceQuiz.reponsePeur.bonne,
            this.infosInfluenceQuiz.reponseIrritePar.bonne,
            this.infosInfluenceQuiz.reponseSousStress.bonne
          ],
          backgroundColor: 'darkgreen',
          borderColor: 'darkgreen',
          borderWidth: 1
        },
        {
          label: 'nombre de mauvaises réponses',
          data: [this.infosInfluenceQuiz.reponsePointAppui.mauvaise,
            this.infosInfluenceQuiz.reponseLimites.mauvaise,
            this.infosInfluenceQuiz.reponseBesoins.mauvaise,
            this.infosInfluenceQuiz.reponseMoteurs.mauvaise,
            this.infosInfluenceQuiz.reponsePeur.mauvaise,
            this.infosInfluenceQuiz.reponseIrritePar.mauvaise,
            this.infosInfluenceQuiz.reponseSousStress.mauvaise
          ],
          backgroundColor: 'darkred',
          borderColor: 'darkred',
          borderWidth: 1
        }]
      },
    });
  }
  createBarChartStabilite() {
    // Repartition des reponses pour le questionnaire sur la Stabilité
    this.hrzBarsS = new Chart(this.barChartStabilite.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Point d\'appui', 'Limites', 'Besoins', 'Moteurs', 'Peur', 'Irrité par', 'Sous stress'],
        datasets: [{
          label: 'nombre de bonnes réponses',
          data: [this.infosStabiliteQuiz.reponsePointAppui.bonne,
            this.infosStabiliteQuiz.reponseLimites.bonne,
            this.infosStabiliteQuiz.reponseBesoins.bonne,
            this.infosStabiliteQuiz.reponseMoteurs.bonne,
            this.infosStabiliteQuiz.reponsePeur.bonne,
            this.infosStabiliteQuiz.reponseIrritePar.bonne,
            this.infosStabiliteQuiz.reponseSousStress.bonne
          ],
          backgroundColor: 'darkgreen',
          borderColor: 'darkgreen',
          borderWidth: 1
        },
        {
          label: 'nombre de mauvaises réponses',
          data: [this.infosStabiliteQuiz.reponsePointAppui.mauvaise,
            this.infosStabiliteQuiz.reponseLimites.mauvaise,
            this.infosStabiliteQuiz.reponseBesoins.mauvaise,
            this.infosStabiliteQuiz.reponseMoteurs.mauvaise,
            this.infosStabiliteQuiz.reponsePeur.mauvaise,
            this.infosStabiliteQuiz.reponseIrritePar.mauvaise,
            this.infosStabiliteQuiz.reponseSousStress.mauvaise
          ],
          backgroundColor: 'darkred',
          borderColor: 'darkred',
          borderWidth: 1
        }]
      },
    });
  }
  createBarChartConformite() {
    // Repartition des reponses pour le questionnaire sur la Stabilité
    this.hrzBarsC = new Chart(this.barChartConformite.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Point d\'appui', 'Limites', 'Besoins', 'Moteurs', 'Peur', 'Irrité par', 'Sous stress'],
        datasets: [{
          label: 'nombre de bonnes réponses',
          data: [this.infosConformiteQuiz.reponsePointAppui.bonne,
            this.infosConformiteQuiz.reponseLimites.bonne,
            this.infosConformiteQuiz.reponseBesoins.bonne,
            this.infosConformiteQuiz.reponseMoteurs.bonne,
            this.infosConformiteQuiz.reponsePeur.bonne,
            this.infosConformiteQuiz.reponseIrritePar.bonne,
            this.infosConformiteQuiz.reponseSousStress.bonne
          ],
          backgroundColor: 'darkgreen',
          borderColor: 'darkgreen',
          borderWidth: 1
        },
        {
          label: 'nombre de mauvaises réponses',
          data: [this.infosConformiteQuiz.reponsePointAppui.mauvaise,
            this.infosConformiteQuiz.reponseLimites.mauvaise,
            this.infosConformiteQuiz.reponseBesoins.mauvaise,
            this.infosConformiteQuiz.reponseMoteurs.mauvaise,
            this.infosConformiteQuiz.reponsePeur.mauvaise,
            this.infosConformiteQuiz.reponseIrritePar.mauvaise,
            this.infosConformiteQuiz.reponseSousStress.mauvaise
          ],
          backgroundColor: 'darkred',
          borderColor: 'darkred',
          borderWidth: 1
        }]
      },
    });
  }

  createPieChart() {

    // Repartition des disc choisis
    this.pie = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Dominance', 'Influence', 'Stabilité', 'Conformité'],
        datasets: [{
          label: 'Répartition des DISC',
          data: [this.numberDominanceQuiz,
            this.numberInfluenceQuiz,
            this.numberStabiliteQuiz,
            this.numberConformiteQuiz
          ],
          backgroundColor: ['#c0392b', '#f1c40f', '#27ae60', '#2980b9'],
          borderColor: ['#c0392b', '#f1c40f', '#27ae60', '#2980b9'],
          borderWidth: 1
        }]
      }
    });
  }

  genererRemarquesProgression() {
    const ratioProgression =  this.quizReussite / this.progressionTotale;
    if (ratioProgression < 0.45) {
      this.remarqueNombreVictoireDefaite = 'Tu connais beaucoup plus  d\'échecs que de réussite. Révises correctement les différents DISC.';
    } else if (ratioProgression >= 0.45 && ratioProgression <= 0.6) {
      this.remarqueNombreVictoireDefaite = 'Ton taux de réussite est dans la moyenne. Continues, tu es sur la bonne voie.';
    } else if (ratioProgression > 0.6) {
      this.remarqueNombreVictoireDefaite = 'Ton taux de réussite est tres bien voire excellent. Tu maîtrises les disc que tu as testés.';
    }
  }

  genererRemarquesRepartition() {
  }

    /*this.remarqueRepartition = '';
    this.remarqueDominance = '';
    this.remarqueInfluence = '';
    this.remarqueStabilite = '';
    this.remarqueConformite = '';
  }*/



  async reinitAllContents(event: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Réinitaliser contenu',
      message: 'Voulez-vous vraiment tout supprimer ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Continuer',
          handler: () => {
            this.reinit();
            this.presentLoading(event);
          }
        }
      ]
    });

    await alert.present();
  }


  async presentLoading(event: any) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Suppression en cours...',
      duration: 1000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.presentToast();
    this.router.navigate(['/tabs/disc']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Les informations ont été supprimés avec succès.',
      duration: 2000
    });
    toast.present();
  }

  /**
   * Méthode de réinitialisation complète des données
   */
  reinit() {
    this.numberDominanceQuiz = 0;
    this.numberInfluenceQuiz = 0;
    this.numberStabiliteQuiz = 0;
    this.numberConformiteQuiz = 0;
    this.infosDominanceQuiz = new InfosQuestionnaire();
    this.infosInfluenceQuiz = new InfosQuestionnaire();
    this.infosStabiliteQuiz = new InfosQuestionnaire();
    this.infosConformiteQuiz = new InfosQuestionnaire();
    this.progressionTotale = 0;
    this.quizReussite = 0;
    this.quizEchec = 0;
    this.quizAbandonne = 0;
    this.remarqueNombreVictoireDefaite = '';
    this.remarqueRepartition = '';
    this.remarqueDominance = '';
    this.remarqueInfluence = '';
    this.remarqueStabilite = '';
    this.remarqueConformite = '';
    this.discProgression = {
      progression : 0,
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
    remove('DiscTitleDone');
    remove('infos-Dominance');
    remove('infos-Influence');
    remove('infos-Stabilité');
    remove('infos-Conformité');
    remove('discProgression');
  }
}
