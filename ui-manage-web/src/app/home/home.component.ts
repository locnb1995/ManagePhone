import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentComponent } from '../content/content.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(ContentComponent) contentComponent: ContentComponent;
  constructor() { }

  ngOnInit() {

  }

  onChangeContent(content: number) {
    this.contentComponent.onChangeContent(content);
  }

}
