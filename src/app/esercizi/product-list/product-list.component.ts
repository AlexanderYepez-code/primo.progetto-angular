import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  prodotti = [
    { nome: 'laptop', prezzo: 999, disponibile: true },
    { nome: 'Mouse', prezzo: 29, disponibile: false },
    { nome: 'Tastiera', prezzo: 59, disponibile: true }
  ]

}
