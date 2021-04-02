import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ForfaitService } from '../../services/forfait.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forfait-by-type',
  templateUrl: './forfait-by-type.page.html',
  styleUrls: ['./forfait-by-type.page.scss'],
})
export class ForfaitByTypePage implements OnInit {
  idTypeForfait:string="";
  typeForfait:{};
  forfaits:any[];

  constructor(public forfait: ForfaitService,private router: Router,private activatedRouter: ActivatedRoute,public menu : MenuController,public toastController: ToastController){
    this.idTypeForfait=this.activatedRouter.snapshot.params['idTypeForfait'];
  }

  ngOnInit(){
    this.getForfaitByType();
  }

  doRefresh(event){
    this.getForfaitByType();
    setTimeout(()=>{event.target.complete();}, 2000);
  }

  getForfaitByType(){
    const succes=response=>{
      this.typeForfait=response.datas.typeForfait;
      this.forfaits=response.datas.forfaits;
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };

    this.forfait.getForfaitByType(this.idTypeForfait).subscribe(succes,error);
  }

  async presentToast(mess:string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }

  describeForfait(idForfait:string){
    this.router.navigate(['/forfait-details',idForfait]);
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