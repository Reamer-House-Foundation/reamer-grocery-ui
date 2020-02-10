import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GroceryItem } from '../models/grocery-item.model';

@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.css']
})
export class GroceryListItemComponent {
  @Input()
  item: GroceryItem[];

  @Output('item')
  itemEmitter = new EventEmitter<GroceryItem>();

  selectItem(item: GroceryItem) {
    console.log("item selected:", item)
    this.itemEmitter.emit(item);
  }
}