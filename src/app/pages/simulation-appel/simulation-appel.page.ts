import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../../services/simulation.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-simulation-appel',
  templateUrl: './simulation-appel.page.html',
  styleUrls: ['./simulation-appel.page.scss'],
})
export class SimulationAppelPage implements OnInit {
  destination:string="";
  duree:string="";
  dateConsoAppel:string="";
  date:string="";

  constructor(public simulation:SimulationService,public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(mess:string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 3000
    });
    toast.present();
  }

  simulerAppel(){
    const success=response=>{
      this.presentToast(response.message);
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };
    if(this.dateConsoAppel!="")this.date=this.dateConsoAppel.split("T")[0]+" "+this.dateConsoAppel.split("T")[1].split("+")[0];
    this.simulation.simulerAppel(this.destination,this.duree,this.date).subscribe(success,error);
  }
}