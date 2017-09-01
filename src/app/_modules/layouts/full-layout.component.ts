import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/index';
import { User } from '../../_models/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../../layout/default/full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  user = new User;
  loggedIn: boolean;

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.isLoggedIn()
      .subscribe(r => {
        this.loggedIn = r;
      });
    this.authenticationService.whoAmI()
      .subscribe(r => {
        this.user = r;
      });
  }

  ngOnInit(): void {}
}
