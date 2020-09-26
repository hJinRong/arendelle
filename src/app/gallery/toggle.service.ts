import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ToggleService {
  focusOnArticle: BehaviorSubject<boolean>;

  constructor() {
    this.focusOnArticle = new BehaviorSubject<boolean>(!environment.production);
  }

  toggle() {
    this.focusOnArticle.next(!this.focusOnArticle.value);
  }
}
