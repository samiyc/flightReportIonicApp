import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFormPage } from './my-form.page';

const routes: Routes = [
  {
    path: '',
    component: MyFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFormPageRoutingModule {}
