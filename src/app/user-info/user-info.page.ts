import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { InfosQuestionnaire } from '../model/infos-questionnaire';
import { get } from '../services/storage.service';

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

  constructor() {
    this.numberDominanceQuiz = 0;
    this.numberInfluenceQuiz = 0;
    this.numberStabiliteQuiz = 0;
    this.numberConformiteQuiz = 0;
    this.infosDominanceQuiz = new InfosQuestionnaire();
    this.infosInfluenceQuiz = new InfosQuestionnaire();
    this.infosStabiliteQuiz = new InfosQuestionnaire();
    this.infosConformiteQuiz = new InfosQuestionnaire();
    this.progressionTotale = 0;
  }

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    get('Dominance').then(value => this.numberDominanceQuiz = value === null ? 0 : value);
    get('Influence').then(value => this.numberInfluenceQuiz = value === null ? 0 : value);
    get('Stabilité').then(value => this.numberStabiliteQuiz = value === null ? 0 : value);
    get('Conformité').then(value => this.numberConformiteQuiz = value === null ? 0 : value);
    get('Progression').then(value => this.progressionTotale = value === null ? 0 : value);
    get('infos-Dominance').then(value => { if (value){ this.infosDominanceQuiz = value; } this.createBarChartDominance(); });
    get('infos-Influence').then(value => { if (value){ this.infosInfluenceQuiz = value;  } this.createBarChartInfluence(); });
    get('infos-Stabilite').then(value => { if (value){ this.infosStabiliteQuiz = value;  } this.createBarChartStabilite(); });
    get('infos-Conformite').then(value => { if (value){ this.infosConformiteQuiz = value;  } this.createBarChartConformite(); });
    this.createPieChart();
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
          backgroundColor: '#ddee44',
          borderColor: '#ddee44',
          borderWidth: 1,
          minBarLength: 2
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
          backgroundColor: '#dd1144',
          borderColor: '#dd1144',
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
          backgroundColor: '#ddee44',
          borderColor: '#ddee44',
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
          backgroundColor: '#dd1144',
          borderColor: '#dd1144',
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
          backgroundColor: '#ddee44',
          borderColor: '#ddee44',
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
          backgroundColor: '#dd1144',
          borderColor: '#dd1144',
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
          backgroundColor: '#ddee44',
          borderColor: '#ddee44',
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
          backgroundColor: '#dd1144',
          borderColor: '#dd1144',
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
          backgroundColor: ['red', 'yellow', 'green', 'blue'],
          borderColor: ['red', 'yellow', 'green', 'blue'],
          borderWidth: 1
        }]
      }
    });
  }
}
