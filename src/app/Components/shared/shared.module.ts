import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DurationPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DurationPipe,
  ]
})
export class SharedModule {}