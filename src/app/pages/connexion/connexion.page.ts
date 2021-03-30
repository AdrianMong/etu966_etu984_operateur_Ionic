import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AccountService } from '../../services/account.service';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  numero:string='';
  mdp:string='';

  constructor(public alertController: AlertController,public account: AccountService,public helper:HelperService,private router: Router) { }

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
            this.router.navigate(['/'])  
          }
        },],
    });
    await alert.present();
  }

  connexion(){
    const success=response=>{
      this.helper.setAccountData(response.datas);
      this.alert(response.message);
    };
    const error=response=>{
      this.alert(response.error.message);
    };

    this.account.connexion(this.numero,this.mdp).subscribe(success,error);
  }


}