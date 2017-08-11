import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  public links: any[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/Libertual/api-client',
      icon: 'github',
    },
    {
      name: 'Issues',
      url: 'https://github.com/Libertual/api-client/issues',
      icon: 'bug',
    },
    {
      name: 'Tecnual',
      url: 'https://github.com/tecnual',
      icon: 'user',
    },
  ];

  constructor() { }

  ngOnInit() { }
}
