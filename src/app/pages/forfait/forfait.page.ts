import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ForfaitService } from '../../services/forfait.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.page.html',
  styleUrls: ['./forfait.page.scss'],
})
export class ForfaitPage implements OnInit {
  typeForfait:any[];

  constructor(public forfait: ForfaitService,private router: Router,public menu : MenuController,public toastController: ToastController) { }

  ngOnInit(){
    this.getTypeForfait();
  }
  
  async presentToast(mess:string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }

  getTypeForfait(){
    const success=response=>{
      this.typeForfait=response.datas.typeForfait;
    };
    const error=response=>{
      this.presentToast(response.error.message);

    };
    this.forfait.getTypeForfait().subscribe(success,error);
  }

  forfaitByType(idTypeForfait:string){
    this.router.navigate(['/forfait-by-type',idTypeForfait]);
  }

  doRefresh(event){
    this.getTypeForfait();
    setTimeout(()=>{event.target.complete();}, 2000);
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