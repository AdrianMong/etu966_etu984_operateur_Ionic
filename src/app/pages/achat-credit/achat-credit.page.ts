import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-achat-credit',
  templateUrl: './achat-credit.page.html',
  styleUrls: ['./achat-credit.page.scss'],
})
export class AchatCreditPage implements OnInit {
  montant:string="";
  dateAchat:string="";
  date:string="";

  constructor(public account:AccountService,public toastController: ToastController,public menu : MenuController) { }

  ngOnInit(){
  }

  achat(){
    const success=response=>{
      this.presentToast(response.message);
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };

    if(this.dateAchat!="")this.date=this.dateAchat.split("T")[0]+" "+this.dateAchat.split("T")[1].split("+")[0];
    this.account.achatCredit(this.montant,this.date).subscribe(success,error);
  }

  async presentToast(mess:string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 3000
    });
    toast.present();
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