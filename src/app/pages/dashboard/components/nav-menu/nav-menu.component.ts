import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  @Output() public themeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  public themeFlag = false;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
  }

  public toggleThemeComponent() {
    this.themeFlag = !this.themeFlag;
    this.dashboardService.setTheme(this.themeFlag);
    this.themeChanged.emit(this.themeFlag);
  }

}
