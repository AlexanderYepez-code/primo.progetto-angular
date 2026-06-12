import { Component, signal , computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  prezzoNetto = signal(100)
  aliquotaIva = signal(22)

    prezzoLordo = computed(() =>
    this.prezzoNetto() * (1 + this.aliquotaIva() / 100)
  );
  aggiornaPrezzoNetto(event: Event) {
  const input = event.target as HTMLInputElement;
  this.prezzoNetto.set(+input.value);
}



}
