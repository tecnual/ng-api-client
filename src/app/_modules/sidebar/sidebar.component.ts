import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../_models/index';

@Component({
  selector: 'app-sidebar',
  templateUrl: '../../layout/default/sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input() user = new User;

  constructor() { }

  ngOnInit() {
  }
}
