import { NgModule } from '@angular/core';
import { MonitorComponent } from './monitor.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MonitorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
