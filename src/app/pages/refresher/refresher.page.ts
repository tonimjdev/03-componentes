import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];
  message: string = 'Arrastra abajo para refresh';
  constructor() { }

  ngOnInit() {
  }

  doRefresh(event:any){
   setTimeout(() => {
     this.items = Array(20);
     this.message = '';
    event.target.complete();
   }, 1500)
  }
}
