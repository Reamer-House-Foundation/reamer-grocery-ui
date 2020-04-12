import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Observable } from 'rxjs';
import { GroceryItem } from '../models/grocery-item.model';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceryList$: Observable<GroceryItem[]> = this.inventoryService.getItems();

  constructor(
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {  }
}
