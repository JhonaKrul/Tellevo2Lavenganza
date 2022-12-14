import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesPage } from './viajes.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesPage
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesPageRoutingModule {}
