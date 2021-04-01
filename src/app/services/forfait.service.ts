import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor(public http : HttpClient, public helper:HelperService) { }

  getTypeForfait(){
    const options=this.helper.formOption();
    return this.http.get(base_url+'forfait/typeForfait',options);
  }

  getForfaitByType(idTypeForfait:string){
    const options=this.helper.formOption();
    return this.http.get(base_url+'forfait/forfaitByType?idTypeForfait='+idTypeForfait,options);
  }

  getForfait(idForfait:string){
    const options=this.helper.formOption();
    return this.http.get(base_url+'forfait/describeForfait?idForfait='+idForfait,options);
  }

  achatForfait(idForfait:string,dateAchatForfait:string,methodePaiement:string){
    const options=this.helper.formOption(true);
    let params=new HttpParams().append("idForfait",idForfait).append("dateAchatForfait",dateAchatForfait).append("methodePaiement",methodePaiement);
    return this.http.post(base_url+'forfait/achatForfait',params,options);
  }
}