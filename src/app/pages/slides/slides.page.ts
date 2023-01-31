import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';

import { SwiperComponent } from 'swiper/angular';
import swiper from 'swiper';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlidesPage implements AfterContentChecked {

  @ViewChild(swiper) swiper!: SwiperComponent;

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!'
    }
  ];

  constructor( private navCtrl: NavController ) { }
  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
  

  onClick() {

    this.navCtrl.navigateBack('/');
  }

}
