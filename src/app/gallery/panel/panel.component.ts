import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ToggleService } from '../toggle.service';
import { RequestArticlesService } from '../request-articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [
    trigger('controlCardCon', [
      state(
        'open',
        style({
          width: '57%',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          width: 0,
          opacity: 0,
          visibility: 'hidden',
          padding: 0,
        })
      ),
      transition('open<=>closed', [animate('0.3s')]),
    ]),
  ],
})
export class PanelComponent implements OnInit {
  cardConFocused = true;
  articleEnlarged: boolean;
  articlesArr: Article[];

  constructor(
    private tgs: ToggleService,
    private ras: RequestArticlesService
  ) {}

  ngOnInit(): void {
    this.tgs.cardConFocused.subscribe((x) => (this.cardConFocused = x));
    this.tgs.articleFocused.subscribe((x) => (this.articleEnlarged = x));
    this.ras
      .requestForArticles()
      .subscribe((data) => (this.articlesArr = data));
  }

  toggleFocus() {
    this.tgs.toggle();
  }
}
