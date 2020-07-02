import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;

  constructor() {}

  ngOnInit(): void {}

  get stars(): Array<boolean> {
    return Array(5).fill(false).fill(true, 0, this.rating);
  }
}
