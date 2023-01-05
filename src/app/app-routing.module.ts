import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoingresadoGuard } from './noingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    //canActivate : [NoingresadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    //canActivate : [IngresadoGuard]
  },
  {
    path: 'modal-bitacora',
    loadChildren: () => import('./pages/modals/modal-bitacora/modal-bitacora.module').then( m => m.ModalBitacoraPageModule),
    //canActivate : [IngresadoGuard]
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
