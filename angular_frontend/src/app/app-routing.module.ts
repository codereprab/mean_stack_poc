import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component : LoginComponent },
  { path: "dashboard", loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: "about", loadChildren: () => import('./ijs/ijs.module').then(m => m.IjsModule)},
  { path: "team", loadChildren: () => import('./meet/meet.module').then(m => m.MeetModule)},
  { path: "pagenotfound", loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)},
  { path: '**', redirectTo: '/pagenotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
