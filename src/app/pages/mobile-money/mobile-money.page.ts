import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-mobile-money',
  templateUrl: './mobile-money.page.html',
  styleUrls: ['./mobile-money.page.scss'],
})
export class MobileMoneyPage implements OnInit {
  compte:{};

  montant:string="";
  typeMouvement:string="";
  dateMouvementMM:string="";
  date:string="";

  constructor(public account:AccountService,public toastController: ToastController) { }

  ngOnInit() {
    this.getInfoCompte();
  }

  doRefresh(event){
    this.getInfoCompte();
    setTimeout(()=>{event.target.complete();}, 2000);
  }

  async presentToast(mess:string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 3000
    });
    toast.present();
  }

  getInfoCompte(){
    const success=response=>{
      this.compte=response.datas.compte;
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };

    this.account.infoCompte().subscribe(success,error);
  }

  mouvementMM(){
    const success=response=>{
      this.presentToast(response.message);
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };

    if(this.dateMouvementMM!="")this.date=this.dateMouvementMM.split("T")[0]+" "+this.dateMouvementMM.split("T")[1].split("+")[0];
    this.account.mouvementMobileMoney(this.montant,this.typeMouvement,this.date).subscribe(success,error);
    this.getInfoCompte();
  }
}