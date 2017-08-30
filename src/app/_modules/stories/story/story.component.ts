import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../_models/';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class StoryComponent implements OnInit {
  @Input() story: Story;

  constructor() { }

  ngOnInit() {
    // console.log(this.story);
  }

}
