import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'Accueil',
      url: '',
      icon: 'home'
    },
    {
      title: 'Mon compte',
      url: '/info-compte',
      icon: 'person'
    },
    {
      title: 'Mobile Money',
      url: '/mobile-money',
      icon: 'card'
    },
  ];


  constructor() {}


  toggleThemeColor(event){
    if(event.detail.checked){
      document.body.setAttribute("color-theme","dark");
    }
    else{
      document.body.setAttribute("color-theme","light");
    }
  }
}