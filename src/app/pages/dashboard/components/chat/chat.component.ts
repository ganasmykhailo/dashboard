import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() public boundsElement;
  public themeFlag;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.themeFlag$.subscribe((value) => this.themeFlag = value);
  }

  close() {
    console.log('close'); // TODO remove console.log
  }

}
