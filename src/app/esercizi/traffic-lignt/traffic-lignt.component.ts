import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-traffic-lignt',
  standalone: true,
  imports: [],
  templateUrl: './traffic-lignt.component.html',
  styleUrl: './traffic-lignt.component.css'
})
export class TrafficLigntComponent {
  color = signal('red')

  cambiaColore(){
    this.color.update(colore => {
      if(colore === 'red') return 'yellow';
      if (colore === 'yellow') return 'green'
      return 'red'
    })
  }

}
