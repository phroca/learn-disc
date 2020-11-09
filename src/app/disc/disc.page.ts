import { Component } from '@angular/core';

@Component({
  selector: 'app-disc',
  templateUrl: 'disc.page.html',
  styleUrls: ['disc.page.scss']
})
export class DiscPage {
  // Paramètres optionnelles pour le composant slider
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  flipcardD: boolean;
  flipcardI: boolean;
  flipcardS: boolean;
  flipcardC: boolean;
  constructor() {
    this.flipcardD = false;
    this.flipcardI = false;
    this.flipcardS = false;
    this.flipcardC = false;
  }

  flipCardDominance(){
    this.flipcardD = !this.flipcardD;
  }
  flipCardInfluence(){
    this.flipcardI = !this.flipcardI;
  }
  flipCardStabilite(){
    this.flipcardS = !this.flipcardS;
  }
  flipCardConformite(){
    this.flipcardC = !this.flipcardC;
  }

}
