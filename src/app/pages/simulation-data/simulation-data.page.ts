import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../../services/simulation.service';
import { ToastController } from '@ionic/angular';
@Component({

  selector: 'app-simulation-data',
  templateUrl: './simulation-data.page.html',
  styleUrls: ['./simulation-data.page.scss'],
})
export class SimulationDataPage implements OnInit {
  site:string="";
  data:string="";
  dateConsoData:string="";
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

  simulerData(){
    const success=response=>{
      this.presentToast(response.message);
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };
    if(this.dateConsoData!="")this.date=this.dateConsoData.split("T")[0]+" "+this.dateConsoData.split("T")[1].split("+")[0];
    this.simulation.simulerData(this.site,this.data,this.date).subscribe(success,error);
  }
}