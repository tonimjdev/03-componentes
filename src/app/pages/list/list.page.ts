import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios!: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  favorite(user:any) {
    console.log('Favorite', user);
    this.ionList.closeSlidingItems();
  }
  share(user:any) {
    console.log('Share', user);
    this.ionList.closeSlidingItems();
  }
  delete(user:any) {
    console.log('Delete', user.name);
    this.ionList.closeSlidingItems();
  }

}
