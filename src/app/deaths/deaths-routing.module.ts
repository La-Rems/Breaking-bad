import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeathListComponent} from "./death-list/death-list.component";

const routes: Routes = [{ path: '', component: DeathListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeathsRoutingModule { }
