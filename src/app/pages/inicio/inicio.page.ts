import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  reditectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Componente[] = [
   {
    icon: 'american-football-outline',
    name: 'Action Sheet',
    reditectTo: '/action-sheet'
   }, 
   {
    icon: 'alert-circle-outline',
    name: 'Alert',
    reditectTo: '/alert'
   }, 
   {
    icon: 'beaker-outline',
    name: 'Avatar',
    reditectTo: '/avatar'
   } , 
   {
    icon: 'radio-button-off-outline',
    name: 'Button',
    reditectTo: '/button'
   }, 
   {
    icon: 'card-outline',
    name: 'Cards',
    reditectTo: '/card'
   }, 
   {
    icon: 'checkmark-circle-outline',
    name: 'Checks',
    reditectTo: '/check'
   }, 
   {
    icon: 'calendar-outline',
    name: 'DateTime',
    reditectTo: '/date-time'
   }, 
   {
    icon: 'car-outline',
    name: 'Fab',
    reditectTo: '/fab'
   } 
  ];

  constructor() { }

  ngOnInit() {
  }

}
