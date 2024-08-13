import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirtComponent } from './firt.component';
import { FirtRoutingModule } from './firt-routing.module';

@NgModule({
  declarations: [FirtComponent],
  imports: [CommonModule, FirtRoutingModule],
})
export class FirtModule {}
