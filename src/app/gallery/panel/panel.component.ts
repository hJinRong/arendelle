import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

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
        })
      ),
      transition('open<=>closed', [animate('0.3s')]),
    ]),
  ],
})
export class PanelComponent implements OnInit {
  isOpen = true;

  constructor() {}

  ngOnInit(): void {}

  trigger() {
    this.isOpen = !this.isOpen;
  }
}
