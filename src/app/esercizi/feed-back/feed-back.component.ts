import { Component } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-feed-back',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './feed-back.component.html',
  styleUrl: './feed-back.component.css'
})
export class FeedBackComponent {
  voto: number | null = null;

  onVoto(n: number) {
    this.voto = n;
  }

}
