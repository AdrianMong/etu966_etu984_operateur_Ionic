import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription-client',
    loadChildren: () => import('./pages/inscription-client/inscription-client.module').then( m => m.InscriptionClientPageModule)
  },
  {
    path: 'info-compte',
    loadChildren: () => import('./pages/info-compte/info-compte.module').then( m => m.InfoComptePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'mobile-money',
    loadChildren: () => import('./pages/mobile-money/mobile-money.module').then( m => m.MobileMoneyPageModule)
  },
  {
    path: 'forfait',
    loadChildren: () => import('./pages/forfait/forfait.module').then( m => m.ForfaitPageModule)
  },
  {
    path: 'forfait-by-type/:idTypeForfait',
    loadChildren: () => import('./pages/forfait-by-type/forfait-by-type.module').then( m => m.ForfaitByTypePageModule)
  },
  {
    path: 'forfait-details/:idForfait',
    loadChildren: () => import('./pages/forfait-details/forfait-details.module').then( m => m.ForfaitDetailsPageModule)
  },
  {
    path: 'achat-credit',
    loadChildren: () => import('./pages/achat-credit/achat-credit.module').then( m => m.AchatCreditPageModule)
  },
  {
    path: 'simulation-appel',
    loadChildren: () => import('./pages/simulation-appel/simulation-appel.module').then( m => m.SimulationAppelPageModule)
  },
  {
    path: 'simulation-sms',
    loadChildren: () => import('./pages/simulation-sms/simulation-sms.module').then( m => m.SimulationSMSPageModule)
  },
  {
    path: 'simulation-data',
    loadChildren: () => import('./pages/simulation-data/simulation-data.module').then( m => m.SimulationDataPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
