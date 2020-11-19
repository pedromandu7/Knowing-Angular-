import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MonitorRoutingModule,
  ],
  declarations: [MonitorComponent],
  exports: [MonitorComponent]
})
export class MonitorModule { }
