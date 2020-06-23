import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToggleService {
  focusOnArticle: BehaviorSubject<boolean>;

  constructor() {
    this.focusOnArticle = new BehaviorSubject<boolean>(false);
  }

  toggle() {
    this.focusOnArticle.next(!this.focusOnArticle.value);
  }
}
