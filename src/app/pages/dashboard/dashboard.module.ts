import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { CurrencyBlockComponent } from './components/currency-block/currency-block.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { OrderBlockComponent } from './components/order-block/order-block.component';

@NgModule({
  declarations: [DashboardComponent, SideBarComponent, NavMenuComponent, CurrencyBlockComponent, InfoBlockComponent, OrderBlockComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
