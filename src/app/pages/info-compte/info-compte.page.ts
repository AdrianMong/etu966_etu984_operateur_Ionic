import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-info-compte',
  templateUrl: './info-compte.page.html',
  styleUrls: ['./info-compte.page.scss'],
})
export class InfoComptePage implements OnInit {
  infoCompte:{};
  dataForfaits:any[];

  constructor(public account:AccountService,public toastController: ToastController) { }

  ngOnInit(){
    this.getInfoCompte();
  }

  doRefresh(event){
    this.getInfoCompte();
    setTimeout(()=>{event.target.complete();}, 2000);
  }

  getInfoCompte(){
    const success=response=>{
      this.infoCompte=response.datas.compte;
      this.dataForfaits=response.datas.forfaits;
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };

    this.account.infoCompte().subscribe(success,error);
  }

  async presentToast(mess:string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 3000
    });
    toast.present();
  }

  getIconName(name:string){
    if(name=="APPEL"){
      return "call";
    }
    else if(name=="SMS"){
      return "chatbubbles";
    }
    else{
      return "globe";
    }
  }
}