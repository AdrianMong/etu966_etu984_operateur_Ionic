import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'tab1',
      url: '/tabs/tab1',
      icon: 'list'
    },
    {
      title: 'tab2',
      url: '/tabs/tab2',
      icon: 'star'
    },
    {
      title: 'tab3',
      url: '/tabs/tab3',
      icon: 'information-circle'
    }
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
