import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { set } from '../services/storage.service';

@Component({
  selector: 'app-disc',
  templateUrl: 'disc.page.html',
  styleUrls: ['disc.page.scss']
})
export class DiscPage {

  constructor(private navCtrl: NavController, private router: Router, private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  gotoDiscSchemaPage() {
    this.navCtrl.navigateForward('/tabs/disc/schema-disc');
  }

  gotoDominancePage() {
    this.navCtrl.navigateForward('/tabs/disc/dominance-page');
  }

  gotoInfluencePage() {
    this.navCtrl.navigateForward('/tabs/disc/influence-page');
  }

  gotoStabilitePage() {
    this.navCtrl.navigateForward('/tabs/disc/stabilite-page');
  }
  gotoConformitePage() {
    this.navCtrl.navigateForward('/tabs/disc/conformite-page');
  }

  /**
   * Méthode permettant de flager à true la sortie de la tab quiz
   */
  ionViewDidLeave() {
    if (this.router.url === '/tabs/quiz/quiz-content') {
      this.router.navigate(['/tabs/quiz']);
      set('tabAlreadyChange', true);
    }
  }
}
