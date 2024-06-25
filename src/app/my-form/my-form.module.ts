import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFormPageRoutingModule } from './my-form-routing.module';

import { MyFormPage } from './my-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFormPageRoutingModule
  ],
  declarations: [MyFormPage]
})
export class MyFormPageModule {}
