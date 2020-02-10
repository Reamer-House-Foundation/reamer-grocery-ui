import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

import { GroceryItem } from './models/grocery-item.model';

@Injectable()
export class InventoryService {

  items: GroceryItem[];

  constructor() {
    this.items = [
      { name: 'salt', count: 1},
      { name: 'pepper', count: 1},
    ];
  }

  getItems() {
    return of(this.items);
  }

  getItemByName(name: String): GroceryItem {
    return this.items.find((item: GroceryItem) => item.name === name);
  }

  addItem(item: GroceryItem) {
    this.items.push(item);
  }

  addItems(items: GroceryItem[]) {
    this.items.push(...items);
  }
}