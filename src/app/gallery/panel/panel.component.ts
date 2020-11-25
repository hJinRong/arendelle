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
    trigger('triggerArticleListStyle', [
      state(
        'open',
        style({
          width: 'clamp(320px, 100vw, 550px)',
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
  focusOnArticle: boolean;
  articlesArr: Article[];

  constructor(
    private tgs: ToggleService,
    private ras: RequestArticlesService
  ) {}

  ngOnInit(): void {
    this.tgs.focusOnArticle.subscribe((value) => (this.focusOnArticle = value));
    this.ras
      .requestForArticles()
      .subscribe((data) => (this.articlesArr = data));
  }

  viewModeToggle() {
    this.tgs.toggle();
  }
}
