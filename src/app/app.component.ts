import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './features/title-component/title-component.component';
import { ParagraphComponent } from './features/paragraph-component/paragraph-component.component';
import { ImageComponent } from './features/image-component/image-component.component';
import { BindingComponenets } from './features/binding-componenets/binding-componenets.component';
import { ProductsCardComponent } from './esercizi/products-card/products-card.component';
import { StudentsListComponent } from './esecizi/students-list/students-list.component';
import { FormComponent } from './esercizi/form-component/form-component.component';
import { FormReactiveComponent } from './esercizi/form-reactive/form-reactive.component';
import { TrafficLigntComponent } from './esercizi/traffic-lignt/traffic-lignt.component';
import { PriceComponent } from './esercizi/price/price.component';
import { ProductCardComponent } from "./esercizi/product-card/product-card.component";
import { ProductListComponent } from './esercizi/product-list/product-list.component';
import { FeedBackComponent } from './esercizi/feed-back/feed-back.component';
import { StarRatingComponent } from './esercizi/star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleComponent,
    ParagraphComponent,
    ImageComponent,
    BindingComponenets,
    ProductsCardComponent,
    StudentsListComponent,
    FormComponent,
    FormReactiveComponent,
    TrafficLigntComponent,
    PriceComponent,
    ProductsCardComponent,
    ProductCardComponent,
    ProductListComponent,
    FeedBackComponent,
    StarRatingComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primo-progetto-angular';
}
