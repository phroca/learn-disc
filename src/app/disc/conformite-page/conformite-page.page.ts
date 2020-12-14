import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conformite-page',
  templateUrl: './conformite-page.page.html',
  styleUrls: ['./conformite-page.page.scss'],
})
export class ConformitePagePage implements OnInit {
  retourText = 'Retour';
  visibilityPA: boolean;
  visibilityL: boolean;
  visibilityB: boolean;
  visibilityM: boolean;
  visibilityP: boolean;
  visibilityIP: boolean;
  visibilitySS: boolean;
  constructor() {
    this.visibilityPA = true;
    this.visibilityL = true;
    this.visibilityB = true;
    this.visibilityM = true;
    this.visibilityP = true;
    this.visibilityIP = true;
    this.visibilitySS = true;
   }

  ngOnInit() {
  }

  toggleVisibilityPA(){
    this.visibilityPA = !this.visibilityPA;
  }

  toggleVisibilityL(){
    this.visibilityL = !this.visibilityL;
  }

  toggleVisibilityB(){
    this.visibilityB = !this.visibilityB;
  }

  toggleVisibilityM(){
    this.visibilityM = !this.visibilityM;
  }

  toggleVisibilityP(){
    this.visibilityP = !this.visibilityP;
  }

  toggleVisibilityIP(){
    this.visibilityIP = !this.visibilityIP;
  }

  toggleVisibilitySS(){
    this.visibilitySS = !this.visibilitySS;
  }
}
