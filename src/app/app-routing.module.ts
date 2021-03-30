import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'zee',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription-client',
    loadChildren: () => import('./pages/inscription-client/inscription-client.module').then( m => m.InscriptionClientPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
