import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../_services/index';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  name: any;
  @Input() displayName: string;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    // get users from secure api end point
  }
}
