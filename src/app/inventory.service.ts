import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { GroceryItem } from './models/grocery-item.model';

@Injectable()
export class InventoryService {

  items: GroceryItem[] = [
    { name: 'salt', count: 1},
    { name: 'pepper', count: 1},
  ];
  items$: BehaviorSubject<GroceryItem[]> = new BehaviorSubject<GroceryItem[]>(this.items);

  constructor() {}

  private setItems(newItems: GroceryItem[]): void {
    this.items$.next(newItems);
    this.items = newItems;
  }

  getItems(): Observable<GroceryItem[]> {
    return this.items$.asObservable();
  }

  getItemByName(name: String): Observable<GroceryItem | undefined> {
    return this.items$.pipe(
      map((items: GroceryItem[]) => {
        return items.find((item: GroceryItem) => item.name === name);
      }));
  }

  addItem(item: GroceryItem): void {
    this.setItems([...this.items, item]);
  }

  addItems(items: GroceryItem[]): void {
    this.setItems([...this.items, ...items]);
  }
}