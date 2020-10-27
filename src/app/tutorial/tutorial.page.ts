import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private storage: Storage, private router: Router) { }
  @ViewChild(IonSlides)
  slides: IonSlides;

  ngOnInit() {
  }

  async finish(){
  await this.storage.set('tutorialComplete',true);
  this.router.navigateByUrl('/')
  }
  next(){
  this.slides.slideNext();
  }

}
