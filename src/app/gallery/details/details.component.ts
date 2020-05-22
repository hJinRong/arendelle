import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() state: boolean;

  expanded = false;

  constructor() {}

  ngOnInit(): void {
    this.expanded = this.state;
  }

  // FIXME maybe we don't need it
  trigger() {
    this.expanded = !this.expanded;
  }
}
