import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BienvenidaPageRoutingModule } from './bienvenida-routing.module';
import { BienvenidaPage } from './bienvenida.page';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Component} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidaPageRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [BienvenidaPage]
})
export class BienvenidaPageModule {}
