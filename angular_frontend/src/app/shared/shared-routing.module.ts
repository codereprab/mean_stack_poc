import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from '../home/dashboard/dashboard.component';
// import { AboutComponent } from '../ijs/about/about.component';
// import { PagenotfoundComponent } from '../error/pagenotfound/pagenotfound.component'

const routes: Routes = [
  // { path: '/dashboard', component: DashboardComponent },
  // { path: '/about', component: AboutComponent },
  // { path: '/error', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
