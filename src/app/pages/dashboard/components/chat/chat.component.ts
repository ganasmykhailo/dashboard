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
  public message;
  public messages = [];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.themeFlag$.subscribe((value) => this.themeFlag = value);

    const firstMessage = {
      owner: 1,
      date: this.getTime(),
      text: 'Hello how we can help you?'
    };
    setTimeout(() => {
      this.messages.push(firstMessage);
    }, 1000);
  }

  closeChat() {
    this.dashboardService.showChat(false);
  }

  onEnter(value) {


    const message = {
      owner: 2,
      date: this.getTime(),
      text: value
    };
    this.messages.push(message);
    this.message = null;
  }

  private getTime() {
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes();
    const ampm = today.getHours() >= 12 ? 'pm' : 'am';

    return `${time} ${ampm}`;
  }
}
