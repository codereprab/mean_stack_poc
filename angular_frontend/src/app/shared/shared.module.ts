import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainnavigationComponent } from './mainnavigation/mainnavigation.component';

//import { AppRoutingModule } from '../app-routing.module'
import { SharedRoutingModule } from './shared-routing.module';
import { ReusableComponent } from './reusable/reusable.component';

@NgModule({
  declarations: [MainnavigationComponent, ReusableComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MainnavigationComponent,
    ReusableComponent
  ]
})
export class SharedModule { }
