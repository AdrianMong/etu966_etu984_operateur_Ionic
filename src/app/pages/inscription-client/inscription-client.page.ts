import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.page.html',
  styleUrls: ['./inscription-client.page.scss'],
})
export class InscriptionClientPage implements OnInit {
  nom:string='';
  prenom:string='';
  dateNaissance:string='';

  constructor(public alertController: AlertController,public account: AccountService,private router: Router) { }

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
            this.router.navigate(['/inscription'])  
          }
        },],
    });
    await alert.present();
  }

  inscriptionClient(){
    const success=response=>{
      this.alert(response.message);
    };
    const error=response=>{
      this.alert(response.error.message);
    };

    this.account.inscriptionClient(this.nom,this.prenom,this.dateNaissance.split('T')[0]).subscribe(success,error);
  }
}