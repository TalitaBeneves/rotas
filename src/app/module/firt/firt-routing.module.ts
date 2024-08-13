import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirtComponent } from './firt.component';

const routes: Routes = [{ path: '', component: FirtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirtRoutingModule {}
