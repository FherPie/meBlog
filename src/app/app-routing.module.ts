import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioPageComponent } from './pages/portafolio-page/portafolio-page.component';

import { AppComponent } from '../app/app.component';
import { TiendaonlineinfoComponent } from './tiendaonlineinfo/tiendaonlineinfo.component';

const routes: Routes = [
  { path: '', component: PortafolioPageComponent },
  { path: 'home', component: PortafolioPageComponent },
  { path: 'tiendainfo', component: TiendaonlineinfoComponent },
  { path: 'auth', loadChildren: './admin/admin.module#AdminModule' },
  { path: '**', component: PortafolioPageComponent }
];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
