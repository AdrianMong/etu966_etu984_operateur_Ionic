import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';
@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(public http : HttpClient, public helper:HelperService) { }

  simulerAppel(destination:string,duree:string,dateConsoAppel:string){
    let params=new HttpParams().append("destination",destination).append("duree",duree).append("dateConsoAppel",dateConsoAppel);
    const options=this.helper.formOption(true);
    return this.http.post(base_url+'simulation/appel',params,options);
  }

  simulerSMS(sms:string,recipient:string,dateConsoSMS:string){
    let params=new HttpParams().append("sms",sms).append("recipient",recipient).append("dateConsoSMS",dateConsoSMS);
    const options=this.helper.formOption(true);
    return this.http.post(base_url+'simulation/sms',params,options);
  }

  simulerData(site:string,data:string,dateConsoData:string){
    let params=new HttpParams().append("site",site).append("data",data).append("dateConsoData",dateConsoData);
    const options=this.helper.formOption(true);
    return this.http.post(base_url+'simulation/data',params,options);
  }
}
