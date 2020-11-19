import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...SHARED_ZORRO_MODULES,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...SHARED_ZORRO_MODULES,
  ]
})
export class SharedModule { }
