import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, throwError} from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { GroceryItem } from './models/grocery-item.model';

// For querying the backend server
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InventoryService {

  items: GroceryItem[] = [
    { name: 'salt', count: 1, units: "Container", owner: "Community"},
    { name: 'pepper', count: 1, units: "Container", owner: "Community"},
  ];
  items$: BehaviorSubject<GroceryItem[]> = new BehaviorSubject<GroceryItem[]>(this.items);

  constructor(private http: HttpClient) {}

  private setItems(newItems: GroceryItem[]): void {
      console.log(newItems);
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

  // Not 100% if this is the correct place to do this, but this is mainly just
  // for proof of concept anyways.  We can discuss and move this later
  queryBackend() {
    return this.http.get("api/graphql?query={user(id:\"1\"){name}}");
  }
}
