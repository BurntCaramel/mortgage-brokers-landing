import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent implements OnInit {
  @Input() rating: number;
  @Input() title: string;
  @Input() description: string;
  @Input() coverImage: string;

  constructor() {}

  ngOnInit(): void {}
}
