import { Injectable } from '@angular/core';
import { GroceryItem } from './models/grocery-item.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { InventoryService } from './inventory.service';

@Injectable()
export class NewItemCartService {

  private tripItems: GroceryItem[] = [];
  private tripItems$: BehaviorSubject<GroceryItem[]> = new BehaviorSubject<GroceryItem[]>(this.tripItems);

  constructor(
    private inventoryService: InventoryService,
  ) {}

  private setItems(newItems: GroceryItem[]) {
    this.tripItems$.next(newItems);
    this.tripItems = newItems;
  }

  getItems(): Observable<GroceryItem[]> {
    return this.tripItems$.asObservable();
  }

  addItemToCart(item: GroceryItem) {
    this.setItems([...this.tripItems, item]);
  }

  clearItems() {
    this.setItems([]);
  }

  async checkOut(callback?: Function) {
    this.inventoryService.addItems(this.tripItems);
    this.clearItems();

    if (callback) {
      callback();
    }
  }
}