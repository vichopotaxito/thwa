import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarcontrPageRoutingModule } from './cambiarcontr-routing.module';

import { CambiarcontrPage } from './cambiarcontr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarcontrPageRoutingModule
  ],
  declarations: [CambiarcontrPage]
})
export class CambiarcontrPageModule {}
