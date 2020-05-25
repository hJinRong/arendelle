import { Component, OnInit, Input } from '@angular/core';
import { ToggleService } from '../toggle.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import * as marked from 'marked';

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
export class DetailsComponent implements OnInit {
  focused: boolean;

  @Input() title: string = 'Wait for a minute';
  @Input() content: string = `## Loading...`;

  public get decodeContent(): string {
    return marked(this.content);
  }

  constructor(private tgs: ToggleService) {}

  ngOnInit(): void {
    this.tgs.articleFocused.subscribe((x) => (this.focused = x));
  }
}
