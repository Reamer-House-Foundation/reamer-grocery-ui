import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroceryItem } from '../models/grocery-item.model';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.css']
})
export class GroceryListItemComponent implements OnInit{
  item: GroceryItem;

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = this.inventoryService.getItemByName(params.get('itemName'));
    });
  }

}