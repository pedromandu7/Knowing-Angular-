import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { WorkplaceComponent } from './workplace.component';
import { WorkplaceRoutingModule } from './workplace-routing.module';



@NgModule({
  declarations: [
    WorkplaceComponent
  ],
  imports: [
    CommonModule,
    WorkplaceRoutingModule,
    SharedModule
  ]
})
export class WorkplaceModule { }
