import { Injectable } from '@angular/core';
import { GroceryItem } from '../models/grocery-item.model';
import { Subject, Observable, of } from 'rxjs';
import { debounce } from './utils/debounce'
import { InventoryService } from './inventory.service';

@Injectable()
export class NewItemCartService {

  tripItems: GroceryItem[] = [];
  tripItemsChange: Subject<GroceryItem[]>;

  constructor(
    private inventoryService: InventoryService,
  ) {
    this.tripItemsChange = new Subject<GroceryItem[]>();
    this.tripItemsChange.subscribe(items => {
      this.tripItems = items;
    });
  }

  private setItems(items: GroceryItem[]) {
    this.tripItemsChange.next(items);
  }

  getItems(): Observable<GroceryItem[]> {
    return this.tripItemsChange.asObservable();
  }

  addItemToCart(item: GroceryItem) {
    this.setItems([...this.tripItems, item]);
    //this.tripItems.push(item);
  }

  clearItems() {
    this.setItems([]);
    //this.tripItems.splice(0, this.tripItems.length);
  }

  async checkOut(callback?: Function) {
    this.inventoryService.addItems(this.tripItems);

    this.clearItems();

    if (callback) {
      callback();
    }
  }
}