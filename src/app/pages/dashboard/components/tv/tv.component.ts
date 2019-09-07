import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  @Input() public boundsElement;

  constructor() {
  }

  ngOnInit() {
  }

}
