import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';

import { MeetRoutingModule } from './meet-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    MeetRoutingModule,
    SharedModule
  ]
})
export class MeetModule { }
