import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
    massimo = input<number>(5);
  votoSelezionato = output<number>();

  stelle() {
    return Array.from({ length: this.massimo() });
  }

}
