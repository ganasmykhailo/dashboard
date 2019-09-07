import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CallModalComponent } from '../../modals/call-modal/call-modal.component';
import { ExportModalComponent } from '../../modals/export-modal/export-modal.component';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public bsModalRef: BsModalRef;

  public showTV: boolean;

  constructor(private modalService: BsModalService,
              private dashboardService: DashboardService) {
  }

  ngOnInit() {
  }

  public openCallModal() {
    this.bsModalRef = this.modalService.show(CallModalComponent, {class: 'call-info-modal'});
  }

  public openExportModal() {
    this.bsModalRef = this.modalService.show(ExportModalComponent, {class: 'export-data-modal'});
  }

  public openTV() {
    this.showTV = !this.showTV;
    this.dashboardService.showTV(this.showTV);
  }
}
