import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `
    <rating [rating]="4"></rating>
  `,
  providers: [ProductService]
})
export class AppComponent {
  onClickMe($event) {
    console.log("Clicked", $event);
  }
}
