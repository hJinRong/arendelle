import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  constructor() {}

  @Input() aid: string;
  @Input() title: string;
  @Input() date: string;

  ngOnInit(): void {}
}
