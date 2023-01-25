import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacim: any = new Date().toISOString();
  fecha: any = new Date().toISOString();
  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event:any ){
    console.log(event);
    console.log(new Date( event.detail.value ));
    this.fechaNacim = event.detail.value;
  }
  cambioFecha2( event:any ){
    console.log(event);
    console.log(new Date( event.detail.value ));
    this.fecha = event.detail.value;
  }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };

}
