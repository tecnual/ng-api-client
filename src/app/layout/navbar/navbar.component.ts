import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public links: any[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/Libertual/api-client',
      icon: 'web',
    },
    {
      name: 'Tecnual',
      url: 'https://github.com/tecnual',
      icon: 'person',
    },
  ];

  constructor() { }

  ngOnInit() { }
}
