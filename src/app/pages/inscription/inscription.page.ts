import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  idClient:string='';
  numero:string='';
  mdp:string='';

  constructor(public alertController: AlertController,public account: AccountService,public router: Router,public menu : MenuController) { 
    
  }

  ngOnInit() {
  }

  async alert(mess:string) {
    const alert = await this.alertController.create({
      cssClass: 'messageBox',
      header: 'Information',
      message: mess,
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          cssClass: 'secondary',
          handler: (response) => {
            this.router.navigate(['/connexion'])  
          }
        },],
    });
    await alert.present();
  }

  inscription(){
    const success=response=>{
      this.alert(response.message);
    };
    const error=response=>{
      this.alert(response.error.message);
    };

    this.account.inscription(this.idClient,this.numero,this.mdp).subscribe(success,error);
  }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.menu.swipeGesture(false);
  }

  ionViewWillLeave(){
    this.menu.enable(true);
    this.menu.swipeGesture(true);
  }
}
