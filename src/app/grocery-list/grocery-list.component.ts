import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { GroceryItem } from '../models/grocery-item.model';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  items: GroceryItem[];

  constructor(
    private inventoryService: InventoryService
  ) {
    this.inventoryService.getItems()
    .subscribe((items: GroceryItem[]) => {
      this.items = items;
    });
  }

  ngOnInit() {

  }
}