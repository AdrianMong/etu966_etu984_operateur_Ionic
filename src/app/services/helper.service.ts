import { Injectable } from '@angular/core';
import { compte } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  formOption(use_authorization=false){
    const options={ 
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    };
    if(use_authorization){
      options['headers']['Authorization']='Bearer '+compte.token;
    }
    return options;
  }

  setAccountData(data){
    compte.token=data['token'];
    compte.idCompte=data['idCompte'];
    compte.numero=data['numero'];
  }

  isLogged(){
    return ((compte.token!='')&&(compte.idCompte!='')&&(compte.numero!= ''));
  }
  
  logOut(){
    compte.token='';
    compte.idCompte='';
    compte.numero='';
  }

  getAccountData(){
    return compte;
  }
}