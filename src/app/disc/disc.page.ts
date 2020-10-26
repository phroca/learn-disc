import { Component } from '@angular/core';

@Component({
  selector: 'app-disc',
  templateUrl: 'disc.page.html',
  styleUrls: ['disc.page.scss']
})
export class DiscPage {
  // Paramètres optionnelles pour le composant slider
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}

}
