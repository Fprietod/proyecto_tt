import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: 'home',canActivate : [NologinGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',canActivate : [AuthGuard],
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'status-chat',
    loadChildren: () => import('./status-chat/status-chat.module').then( m => m.StatusChatPageModule)
  },
  {
    path: 'registro',canActivate : [NologinGuard],
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'sin-registro',
    loadChildren: () => import('./componentes/sin-registro/sin-registro.module').then( m => m.SinRegistroPageModule)
  },  {
    path: 'rutametro',
    loadChildren: () => import('./rutametro/rutametro.module').then( m => m.RutametroPageModule)
  },
  {
    path: 'encuentrame',
    loadChildren: () => import('./encuentrame/encuentrame.module').then( m => m.EncuentramePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
