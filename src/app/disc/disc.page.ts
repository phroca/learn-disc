import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-disc',
  templateUrl: 'disc.page.html',
  styleUrls: ['disc.page.scss']
})
export class DiscPage {

  constructor(private navCtrl: NavController) {}

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
}
