import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToggleService {
  cardConFocused: BehaviorSubject<boolean>;
  articleFocused: BehaviorSubject<boolean>;
  onCardCon = true;

  constructor() {
    this.cardConFocused = new BehaviorSubject(true);
    this.articleFocused = new BehaviorSubject(false);
  }

  focusOnCardCon() {
    this.cardConFocused.next(true);
    this.articleFocused.next(false);
  }

  focusOnArticle() {
    this.cardConFocused.next(false);
    this.articleFocused.next(true);
  }

  toggle() {
    this.onCardCon = !this.onCardCon;
    this.cardConFocused.next(this.onCardCon);
    this.articleFocused.next(!this.onCardCon);
  }
}
