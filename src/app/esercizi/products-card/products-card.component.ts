import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {
  name = 'Zaino da Montagna';
  brand = 'AlpinePro';
  price = 89.90;
  discount = 0.20;
  stock = 2;
  imageUrl = 'https://picsum.photos/300/200';
  tags = ['outdoor', 'sport', 'impermeabile'];
  available = true;

  compra(): void {
    this.available = false;
  }

  finalPrice(): number {
    return this.price - (this.price * this.discount);
  }


}
