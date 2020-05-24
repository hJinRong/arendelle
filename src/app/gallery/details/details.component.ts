import { Component, OnInit, Input } from '@angular/core';
import { ToggleService } from '../toggle.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
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
export class DetailsComponent implements OnInit {
  focused: boolean;

  constructor(private tgs: ToggleService) {}

  ngOnInit(): void {
    this.tgs.articleFocused.subscribe((x) => (this.focused = x));
  }
}
