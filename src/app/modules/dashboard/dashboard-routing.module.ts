import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { OrderComponent } from './pages/order/order.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { StockComponent } from './pages/stock/stock.component';
import { UserComponent } from './pages/user/user.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: NftComponent },
      { path: 'order', component: OrderComponent },
      { path: 'fleet', component: FleetComponent },
      { path: 'registry', component: StockComponent },
      { path: 'user', component: UserComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
