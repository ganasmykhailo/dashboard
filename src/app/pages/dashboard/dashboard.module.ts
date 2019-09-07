import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { OrderBlockComponent } from './components/order-block/order-block.component';
import { CurrencyItemComponent } from './components/currency-item/currency-item.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import {BsDropdownModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import { CallModalComponent } from './modals/call-modal/call-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    NavMenuComponent,
    CurrencyItemComponent,
    InfoBlockComponent,
    OrderBlockComponent,
    NewsItemComponent,
    CallModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
  ]
})
export class DashboardModule { }
