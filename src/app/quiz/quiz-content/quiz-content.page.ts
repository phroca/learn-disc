import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import * as disc from '../../data/disc.json';
import * as discRawJson from '../../data/disc-raw.json';
import { Disc } from 'src/app/model/disc';
import { DiscRaw } from 'src/app/model/disc-raw';
import { InfosQuestionnaire } from 'src/app/model/infos-questionnaire';
import { get, set } from 'src/app/services/storage.service';
import { AlertController } from '@ionic/angular';
import { DiscProgression } from 'src/app/model/disc-progression';

@Component({
  selector: 'app-quiz-content',
  templateUrl: './quiz-content.page.html',
  styleUrls: ['./quiz-content.page.scss'],
})
export class QuizContentPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  retourText = 'Retour';
  listDisc: any = (disc as any).default;
  discRawJson: any = (discRawJson as any).default;
  discChoisi: string;
  disc: Disc[];
  discRaw: DiscRaw;
  discTemporaire: Disc;
  scoreTotal: number;
  // Paramètres optionnelles pour le composant slider
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoHeight: true,
    simulateTouch: false,
    allowTouchMove: false
  };

  // Structure d'information pour les infos utilisateurs
  infosQuestionnaire: InfosQuestionnaire;

  discProgression: DiscProgression;

  progression: number;
  quizzReussite: number;
  quizEchec: number;
  quizAbandonne: number;
  flagLastPage: boolean; // flag permettant de détecter si on est sur le dernier slide
  tabs: any;
  constructor(private route: ActivatedRoute, private router: Router, public alertController: AlertController) {
    this.disc = [];
    this.discTemporaire = new Disc();
    this.discRaw = new DiscRaw();
    this.scoreTotal = 0;
    this.infosQuestionnaire = new InfosQuestionnaire();
    this.discProgression = new DiscProgression();
    this.tabs = document.querySelectorAll('ion-tab-bar');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const test = params.state;
      const navParams = this.router.getCurrentNavigation().extras.state;
      if (navParams) {
        this.discChoisi = navParams.quizName;
      }
    });
    // ITITIALISATION DES ELEMENTS DU DISC
    this.listDisc.forEach(element => {
      const discTemp = new Disc();
      discTemp.titre = element.titre;
      discTemp.pointAppui =  element.pointAppui;
      discTemp.limites =  element.limites;
      discTemp.besoins =  element.besoins;
      discTemp.moteurs =  element.moteurs;
      discTemp.peur =  element.peur;
      discTemp.irritePar =  element.irritePar;
      discTemp.sousStress =  element.sousStress;
      this.disc.push(discTemp);
      }
    );
    this.discTemporaire = this.disc.find(discElement => discElement.titre === this.discChoisi);
    this.initialiserQuiz();
    this.initialiserInfosUtilisateurQuiz();
    get('discProgression').then(value => {
      if (value) {
        this.discProgression = value;
      }
    });
  }

  initialiserQuiz(){
    // LISTE ALEATOIRE DES ELEMENTS DU DISC
    this.initPAValues();
    this.initLValues();
    this.discRawJson.besoins.forEach(element => {
      this.discRaw.besoins.push({
        valeur: element.valeur,
        isChecked: element.isChecked
      });
    });
    this.discRawJson.moteurs.forEach(element => {
      this.discRaw.moteurs.push({
        valeur: element.valeur,
        isChecked: element.isChecked
      });
    });
    this.discRawJson.peur.forEach(element => {
      this.discRaw.peur.push({
        valeur: element.valeur,
        isChecked: element.isChecked
      });
    });
    this.initIValues();
    this.initSValues();
  }

  /**
   * Initialiser les valeurs de Point d'appui
   */
  initPAValues(){
    const indexSelectedList = [];
    this.discTemporaire.pointAppui.forEach(element => {
      this.discRaw.pointAppui.push({
        valeur: element,
        isChecked: false
      });
    });
    this.discRawJson.pointAppui.forEach((element, index) => {
      if (this.discTemporaire.pointAppui.includes(element.valeur)) {
        indexSelectedList.push(index);
      }
    });
    for (let i = 0; i < 5 - this.discTemporaire.pointAppui.length; i++) {
      let indexRandom = Math.floor(Math.random() * this.discRawJson.pointAppui.length);
      while (indexSelectedList.includes(indexRandom)){
        indexRandom = Math.floor(Math.random() * this.discRawJson.pointAppui.length);
      }
      indexSelectedList.push(indexRandom);
      this.discRaw.pointAppui.push({
        valeur: this.discRawJson.pointAppui[indexRandom].valeur,
        isChecked: this.discRawJson.pointAppui[indexRandom].isChecked
      });
    }
    this.shuffle(this.discRaw.pointAppui);
  }

  /**
   * Initialiser les valeurs des limites
   */
  initLValues() {
    const indexSelectedList = [];
    this.discTemporaire.limites.forEach(element => {
      this.discRaw.limites.push({
        valeur: element,
        isChecked: false
      });
    });
    this.discRawJson.limites.forEach((element, index) => {
      if (this.discTemporaire.limites.includes(element.valeur)) {
        indexSelectedList.push(index);
      }
    });
    for (let i = 0; i < 5 - this.discTemporaire.limites.length; i++) {
      let indexRandom = Math.floor(Math.random() * this.discRawJson.limites.length);
      while (indexSelectedList.includes(indexRandom)){
        indexRandom = Math.floor(Math.random() * this.discRawJson.limites.length);
      }
      indexSelectedList.push(indexRandom);
      this.discRaw.limites.push({
        valeur: this.discRawJson.limites[indexRandom].valeur,
        isChecked: this.discRawJson.limites[indexRandom].isChecked
      });
    }
    this.shuffle(this.discRaw.limites);
  }

  /**
   * initialiser les valeurs de irrité Par
   */
  initIValues() {
    const indexSelectedList = [];
    this.discTemporaire.irritePar.forEach(element => {
      this.discRaw.irritePar.push({
        valeur: element,
        isChecked: false
      });
    });
    this.discRawJson.irritePar.forEach((element, index) => {
      if (this.discTemporaire.irritePar.includes(element.valeur)) {
        indexSelectedList.push(index);
      }
    });
    for (let i = 0; i < 5 - this.discTemporaire.irritePar.length; i++) {
      let indexRandom = Math.floor(Math.random() * this.discRawJson.irritePar.length);
      while (indexSelectedList.includes(indexRandom)){
        indexRandom = Math.floor(Math.random() * this.discRawJson.irritePar.length);
      }
      indexSelectedList.push(indexRandom);
      this.discRaw.irritePar.push({
        valeur: this.discRawJson.irritePar[indexRandom].valeur,
        isChecked: this.discRawJson.irritePar[indexRandom].isChecked
      });
    }
    this.shuffle(this.discRaw.irritePar);
  }

  /**
   * initialiser les valeurs de sous stress
   */
  initSValues(){
    const indexSelectedList = [];
    this.discTemporaire.sousStress.forEach(element => {
      this.discRaw.sousStress.push({
        valeur: element,
        isChecked: false
      });
    });
    this.discRawJson.sousStress.forEach((element, index) => {
      if (this.discTemporaire.sousStress.includes(element.valeur)) {
        indexSelectedList.push(index);
      }
    });
    for (let i = 0; i < 5 - this.discTemporaire.sousStress.length; i++) {
      let indexRandom = Math.floor(Math.random() * this.discRawJson.sousStress.length);
      while (indexSelectedList.includes(indexRandom)){
        indexRandom = Math.floor(Math.random() * this.discRawJson.sousStress.length);
      }
      indexSelectedList.push(indexRandom);
      this.discRaw.sousStress.push({
        valeur: this.discRawJson.sousStress[indexRandom].valeur,
        isChecked: this.discRawJson.sousStress[indexRandom].isChecked
      });
    }
    this.shuffle(this.discRaw.sousStress);
  }

  /**
   * Récupère les informations utilisateur sur le thème choisi
   */
  initialiserInfosUtilisateurQuiz() {
    get('infos-' + this.discChoisi).then(valeur => {
      if (valeur != null) {
        this.infosQuestionnaire = {
          discChoisi: valeur.discChoisi,
          reponsePointAppui: {
            bonne: valeur.reponsePointAppui.bonne,
            mauvaise: valeur.reponsePointAppui.mauvaise
          },
          reponseLimites: {
            bonne: valeur.reponseLimites.bonne,
            mauvaise: valeur.reponseLimites.mauvaise
          },
          reponseBesoins: {
            bonne: valeur.reponseBesoins.bonne,
            mauvaise: valeur.reponseBesoins.mauvaise
          },
          reponseMoteurs: {
            bonne: valeur.reponseMoteurs.bonne,
            mauvaise: valeur.reponseMoteurs.mauvaise
          },
          reponsePeur: {
            bonne: valeur.reponsePeur.bonne,
            mauvaise: valeur.reponsePeur.mauvaise
          },
          reponseIrritePar: {
            bonne: valeur.reponseIrritePar.bonne,
            mauvaise: valeur.reponseIrritePar.mauvaise
          },
          reponseSousStress: {
            bonne: valeur.reponseSousStress.bonne,
            mauvaise: valeur.reponseSousStress.mauvaise
          }
         };
      } else {
        this.infosQuestionnaire.discChoisi = this.discChoisi;
      }
    });

  }


  suivantPA() {
    let acceptingAnswer: boolean;
    const listReponses = this.discRaw.pointAppui.filter(pa =>
      pa.isChecked === true
    );
    for (const reponse of listReponses) {
      if (this.discTemporaire.pointAppui.find(dtpa => dtpa === reponse.valeur) == null) {
        acceptingAnswer = false;
        this.infosQuestionnaire.reponsePointAppui.mauvaise++;
        break;
      } else {
        acceptingAnswer = true;
      }
    }
    if (acceptingAnswer) {
      this.infosQuestionnaire.reponsePointAppui.bonne++;
      this.scoreTotal++;
    }
    this.slides.slideNext();
  }

  suivantL() {
    let acceptingAnswer: boolean;
    const listReponses = this.discRaw.limites.filter(l =>
      l.isChecked === true
    );
    for (const reponse of listReponses) {
      if (this.discTemporaire.limites.find(dtl => dtl === reponse.valeur) == null) {
        this.infosQuestionnaire.reponseLimites.mauvaise++;
        acceptingAnswer = false;
        break;
      } else {
        acceptingAnswer = true;
      }
    }
    if (acceptingAnswer) {
      this.infosQuestionnaire.reponseLimites.bonne++;
      this.scoreTotal++;
    }
    this.slides.slideNext();
  }

  suivantB() {
    let acceptingAnswer: boolean;
    const listReponses = this.discRaw.besoins.filter(b =>
      b.isChecked === true);
    for (const reponse of listReponses) {
      if (this.discTemporaire.besoins.find(dtb => dtb === reponse.valeur) == null) {
        this.infosQuestionnaire.reponseBesoins.mauvaise++;
        acceptingAnswer = false;
        break;
      } else {
        acceptingAnswer = true;
      }
    }
    if (acceptingAnswer) {
      this.infosQuestionnaire.reponseBesoins.bonne++;
      this.scoreTotal++;
    }
    this.slides.slideNext();
  }

  suivantM() {
    let acceptingAnswer: boolean;
    const listReponses = this.discRaw.moteurs.filter(m =>
      m.isChecked === true);
    for (const reponse of listReponses) {
      if (this.discTemporaire.moteurs.find(dtm => dtm === reponse.valeur) == null) {
        this.infosQuestionnaire.reponseMoteurs.bonne++;
        acceptingAnswer = false;
        break;
      } else {
        acceptingAnswer = true;
      }
    }
    if (acceptingAnswer) {
      this.infosQuestionnaire.reponseMoteurs.mauvaise++;
      this.scoreTotal++;
    }
    this.slides.slideNext();
  }

  suivantP() {
    let acceptingAnswer: boolean;
    const listReponses = this.discRaw.peur.filter(p =>
      p.isChecked === true
    );
    for (const reponse of listReponses) {
      if (this.discTemporaire.peur.find(dtp => dtp === reponse.valeur) == null) {
        this.infosQuestionnaire.reponsePeur.mauvaise++;
        acceptingAnswer = false;
        break;
      } else {
        acceptingAnswer = true;
      }
    }
    if (acceptingAnswer) {
      this.infosQuestionnaire.reponsePeur.bonne++;
      this.scoreTotal++;
    }
    this.slides.slideNext();
  }

  suivantI() {
    let acceptingAnswer: boolean;
    const listReponses = this.discRaw.irritePar.filter(i =>
      i.isChecked === true
    );
    for (const reponse of listReponses) {
      if (this.discTemporaire.irritePar.find(dti => dti === reponse.valeur) == null) {
        this.infosQuestionnaire.reponseIrritePar.mauvaise++;
        acceptingAnswer = false;
        break;
      } else {
        acceptingAnswer = true;
      }
    }
    if (acceptingAnswer) {
      this.infosQuestionnaire.reponseIrritePar.bonne++;
      this.scoreTotal++;
    }
    this.slides.slideNext();
  }

  suivantS() {
    let acceptingAnswer: boolean;
    const listReponses = this.discRaw.sousStress.filter(s =>
      s.isChecked === true
    );
    for (const reponse of listReponses) {
      if (this.discTemporaire.sousStress.find(dts => dts === reponse.valeur) == null) {
        this.infosQuestionnaire.reponseSousStress.mauvaise++;
        acceptingAnswer = false;
        break;
      } else {
        acceptingAnswer = true;
      }
    }
    if (acceptingAnswer) {
      this.infosQuestionnaire.reponseSousStress.bonne++;
      this.scoreTotal++;
    }
    if (this.scoreTotal === 7 ) {
      this.discProgression.quizReussite++;
    } else {
      this.discProgression.quizEchec++;
    }
    set('discProgression', this.discProgression);
    this.slides.slideNext();

    set('infos-' + this.discChoisi, this.infosQuestionnaire);
  }


  terminer(){
    this.discRaw = new DiscRaw();
    this.scoreTotal = 0;
    this.initialiserQuiz();
    this.initialiserInfosUtilisateurQuiz();
    this.router.navigate(['/tabs/quiz']);
  }

  private shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Quitter le quiz',
      message: 'Le quiz n\'est pas terminé ! Est-tu sûr de vouloir quitter ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Continuer',
          handler: () => {
            this.discProgression.quizAbandonne++;
            set('discProgression', this.discProgression);
            this.router.navigate(['/tabs/quiz']);
          }
        }
      ]
    });
    this.slides.isEnd().then(value => {
      if (value === true) {
        this.router.navigate(['/tabs/quiz']);
      } else {
        alert.present();
      }
    });
  }

  /**
   * Méthode permettant de gerer l'evenement lorque l'utilisateur sort du quiz sans le terminer
   * en passant par les touche de tabs avec :
   * - tabAlreadyChange : flag permettant de détecter si l'utilisateur rentre de nouveau dans la tab quiz de nouveau
   */
  ionViewWillLeave() {
    Object.keys(this.tabs).map((key) => {
      this.tabs[key].style.display = 'flex';
    });
  }

  ionViewWillEnter() {
    Object.keys(this.tabs).map((key) => {
      this.tabs[key].style.display = 'none';
    });
  }
}
