import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  nome = input<string>('');
  prezzo = input<number>(0);
  disponibile = input<boolean>(false);

}
