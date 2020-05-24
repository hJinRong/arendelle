import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ToggleService } from '../toggle.service';

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

  constructor(private tgs: ToggleService) {}

  ngOnInit(): void {
    this.tgs.cardConFocused.subscribe((x) => (this.cardConFocused = x));
    this.tgs.articleFocused.subscribe((x) => (this.articleEnlarged = x));
  }

  toggleFocus() {
    this.tgs.toggle();
  }
}
