import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './features/title-component/title-component.component';
import { ParagraphComponent } from './features/paragraph-component/paragraph-component.component';
import { ImageComponent } from './features/image-component/image-component.component';
import { BindingComponenets } from './features/binding-componenets/binding-componenets.component';
import { ProductsCardComponent } from './esercizi/products-card/products-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleComponent,
    ParagraphComponent,
    ImageComponent,
    BindingComponenets,
    ProductsCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primo-progetto-angular';
}
