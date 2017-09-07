import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-search-box',
  templateUrl: '../../layout/default/search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  model: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  buscar() {
    document.querySelector('body').classList.toggle('sidebar-mobile-show');
    this.router.navigate(['/search'], { queryParams: { search: this.model.search }, skipLocationChange: true });
  }
}
