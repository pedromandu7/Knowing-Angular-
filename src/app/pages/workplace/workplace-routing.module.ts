import { NgModule } from '@angular/core';
import { WorkplaceComponent } from './workplace.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: WorkplaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkplaceRoutingModule { }
