import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public http : HttpClient, public helper:HelperService) { }

  inscriptionClient(nom:string,prenom:string,dateNassaince:string){
    let params=new HttpParams().append("nom",nom).append("prenom",prenom).append("dateNaissance",dateNassaince);
    const options=this.helper.formOption();
    return this.http.post(base_url+'client/create',params,options);
  }

  inscription(idClient:string,numero:string,mdp:string){
    let params=new HttpParams().append("idClient",idClient).append("numero",numero).append("mdp",mdp);
    const options=this.helper.formOption();
    return this.http.post(base_url+'client/createCompte',params,options);
  }

  connexion(numero:string,mdp:string){
    let params=new HttpParams().append("numero",numero).append("mdp",mdp);
    const options=this.helper.formOption();
    return this.http.post(base_url+'compte/connexion',params,options);
  }

  infoCompte(){
    const options=this.helper.formOption(true);
    return this.http.get(base_url+'compte/infoCompte',options);
  }

  achatCredit(montant:string,dateAchatCredit:string){
    let params=new HttpParams().append("montant",montant).append("dateAchatCredit",dateAchatCredit);
    const options=this.helper.formOption(true);
    return this.http.post(base_url+'compte/buyCredit',params,options);
  }

  mouvementMobileMoney(montant:string,typeMouvementMM:string,dateMouvementMM:string){
    let params=new HttpParams().append("montant",montant).append("typeMouvementMM",typeMouvementMM).append('dateMouvementMM',dateMouvementMM);
    const options=this.helper.formOption(true);
    return this.http.post(base_url+'compte/makeMouvementMM',params,options);
  }
}