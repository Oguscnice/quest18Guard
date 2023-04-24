import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { IsConnectedGuard } from './core/is-connected.guard';
import { IsAdminGuard } from './core/is-admin.guard';
import { NotsecuredComponent } from './notsecured/notsecured.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [IsConnectedGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [IsAdminGuard] },
  { path: 'notsecured', component: NotsecuredComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
