import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarcontrPage } from './cambiarcontr.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarcontrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarcontrPageRoutingModule {}
