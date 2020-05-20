import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [
    trigger('openCloseNavBar', [
      state(
        'open',
        style({
          top: 0,
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          top: '-50px',
          opacity: 0,
        })
      ),
      transition('open<=>closed', [animate('0.3s')]),
    ]),
  ],
})
export class ArticlesComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
