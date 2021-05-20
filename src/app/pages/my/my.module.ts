import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingModule } from './my-routing.module';
import { MyComponent } from './my.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [MyComponent, MyProfileComponent],
  imports: [
    CommonModule,
    MyRoutingModule
  ]
})
export class MyModule { }
