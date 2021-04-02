import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AccountService } from '../../services/account.service';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  numero:string='';
  mdp:string='';

  constructor(public alertController: AlertController,public account: AccountService,public helper:HelperService,private router: Router,public menu : MenuController) { 
    
  }

  ngOnInit() {
  }

  async alert(mess:string,func:any) {
    const alert = await this.alertController.create({
      cssClass: 'messageBox',
      header: 'Information',
      message: mess,
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          cssClass: 'secondary',
          handler: func
        },],
    });
    await alert.present();
  }

  connexion(){
    const success=response=>{
      this.helper.setAccountData(response.datas);
      this.alert(response.message,(res) => {
        this.router.navigate(['/'])  
      });
    };
    const error=response=>{
      this.alert(response.error.message,(res)=>{});
    };

    this.account.connexion(this.numero,this.mdp).subscribe(success,error);
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