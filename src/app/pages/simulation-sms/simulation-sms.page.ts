import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../../services/simulation.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-simulation-sms',
  templateUrl: './simulation-sms.page.html',
  styleUrls: ['./simulation-sms.page.scss'],
})
export class SimulationSMSPage implements OnInit {
  recipient:string="";
  sms:string="";
  dateConsoSMS:string="";
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

  simulerSMS(){
    const success=response=>{
      this.presentToast(response.message);
    };
    const error=response=>{
      this.presentToast(response.error.message);
    };
    if(this.dateConsoSMS!="")this.date=this.dateConsoSMS.split("T")[0]+" "+this.dateConsoSMS.split("T")[1].split("+")[0];
    this.simulation.simulerAppel(this.sms,this.recipient,this.date).subscribe(success,error);
  }
}
