import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ForfaitService } from '../../services/forfait.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forfait-details',
  templateUrl: './forfait-details.page.html',
  styleUrls: ['./forfait-details.page.scss'],
})
export class ForfaitDetailsPage implements OnInit {
  dateAchat:string="";
  idForfait:string="";
  forfaitDetails:{};

  constructor(public forfait: ForfaitService,private router: Router,private activatedRouter: ActivatedRoute,public menu : MenuController,public toastController: ToastController) { 
    this.idForfait=this.activatedRouter.snapshot.params['idForfait'];
  }

  ngOnInit() {
    this.getForfait();
  }

  getForfait(){
    const success=response=>{
      this.forfaitDetails=response.datas.forfait;
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };

    this.forfait.getForfait(this.idForfait).subscribe(success,error);
  }

  async presentToast(mess:string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
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

  achat(methodePaiement:string){
    
    this.presentToast("Achat par "+methodePaiement);
    const success=response=>{

    };
    const error=response=>{
      
    };

    this.forfait.achatForfait(this.idForfait,this.dateAchat,methodePaiement).subscribe(success,error);
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
