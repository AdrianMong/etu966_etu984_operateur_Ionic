import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public helper:HelperService,public router: Router) { }

  ngOnInit() {
    if(!this.helper.isLogged()){
      // this.router.navigate(['/connexion']);
    }
  }

}