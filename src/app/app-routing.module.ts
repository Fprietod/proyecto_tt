import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";
import { TutorialGuard } from "./guards/tutorial.guard";


const routes: Routes = [
  {
    path: 'home',canActivate : [NologinGuard, TutorialGuard],
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
  },
  {
    path: 'rutametro',
    loadChildren: () => import('./rutametro/rutametro.module').then( m => m.RutametroPageModule)
  },
  {
    path: 'encuentrame',
    loadChildren: () => import('./encuentrame/encuentrame.module').then( m => m.EncuentramePageModule)
  },
  {
    path: 'reportar',
    loadChildren: () => import('./reportar/reportar.module').then( m => m.ReportarPageModule)
  },
  {
    path: 'detalles/:id',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'estado-metro',
    loadChildren: () => import('./estado-metro/estado-metro.module').then( m => m.EstadoMetroPageModule)
  },
  {
    path: 'reporte-iconos',
    loadChildren: () => import('./reporte-iconos/reporte-iconos.module').then( m => m.ReporteIconosPageModule)
  },
  {
    path: 'estado-metro-sin-registro',
    loadChildren: () => import('./estado-metro-sin-registro/estado-metro-sin-registro.module').then( m => m.EstadoMetroSinRegistroPageModule)
  },
  {
    path: 'detalles-sin-registro/:id',
    loadChildren: () => import('./detalles-sin-registro/detalles-sin-registro.module').then( m => m.DetallesSinRegistroPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },  {
    path: 'reset-pass',
    loadChildren: () => import('./reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
