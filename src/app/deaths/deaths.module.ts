import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathsRoutingModule } from './deaths-routing.module';
import { DeathListComponent } from './death-list/death-list.component';


@NgModule({
  declarations: [
    DeathListComponent
  ],
  imports: [
    CommonModule,
    DeathsRoutingModule
  ]
})
export class DeathsModule { }
