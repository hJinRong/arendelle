import { Component, OnInit, DoCheck, AfterViewChecked } from '@angular/core';
import { ToggleService } from '../toggle.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import * as marked from 'marked';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RequestArticlesService } from '../request-articles.service';
import { Article } from '../article';
import { switchMap } from 'rxjs/operators';
import { highlightBlock } from 'highlight.js';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('imgWidth', [
      state(
        'enlarge',
        style({
          width: '100%',
          height: '426px',
          left: '0',
        })
      ),
      state(
        'reduce',
        style({
          width: '220px',
          height: '280px',
          left: '-17%',
        })
      ),
      transition('enlarge<=>reduce', [animate('0.3s')]),
    ]),
    trigger('radius', [
      state(
        'enlarge',
        style({
          borderRadius: 0,
        })
      ),
      state(
        'reduce',
        style({
          borderRadius: '24px',
        })
      ),
      transition('enlarge<=>reduce', [animate('0.3s')]),
    ]),
    trigger('focusOnDetails', [
      state(
        'focus',
        style({
          width: '60%',
        })
      ),
      state(
        'blur',
        style({
          width: '85%',
        })
      ),
      transition('focus<=>blur', [animate('0.2s')]),
    ]),
  ],
})
export class DetailsComponent implements OnInit, AfterViewChecked {
  focused: boolean;

  articleObj: Article;

  public get figureSrc(): string {
    return this.articleObj.figure
      ? `https://arendelle.tech/api/get-figure/${this.articleObj.figure}`
      : '/assets/404/white-tent.jpg';
  }

  public get decodeContent(): string {
    return marked(this.articleObj.content);
  }

  constructor(
    private tgs: ToggleService,
    private ras: RequestArticlesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tgs.focusOnArticle.subscribe((value) => (this.focused = value));
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.ras.requestForAnArticle(params.get('aid'))
        )
      )
      .subscribe((data: Article) => (this.articleObj = data));
  }

  ngAfterViewChecked() {
    document
      .querySelectorAll<HTMLElement>('pre code')
      .forEach((block) => highlightBlock(block));
  }
}
