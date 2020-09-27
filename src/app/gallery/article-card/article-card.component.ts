import { Component, OnInit, Input } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() aid: string;
  @Input() title: string;
  @Input() date: string;
  @Input() figure: string;

  get figureSrc(): string {
    return this.figure
      ? `https://arendelle.tech/api/get-figure/${this.figure}`
      : '/assets/404/white-tent.jpg';
  }

  constructor(private tgs: ToggleService) {}

  ngOnInit(): void {}

  viewModeToggle() {
    if (window.screen.width <= 1024) {
      this.tgs.toggle();
    }
  }
}
