import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from './services/helper.service';
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

  constructor(public helper:HelperService,private router: Router){
    if(!this.helper.isLogged()){
      this.router.navigate(['/connexion']);
    }
  }

  toggleThemeColor(event){
    if(event.detail.checked){
      document.body.setAttribute("color-theme","dark");
    }
    else{
      document.body.setAttribute("color-theme","light");
    }
  }

  deconnexion(){
    this.helper.logOut();
    if(!this.helper.isLogged()){
      this.router.navigate(['/connexion']);
    }
  }
}