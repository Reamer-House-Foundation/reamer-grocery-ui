import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroceryItem } from '../models/grocery-item.model';
import { InventoryService } from '../inventory.service';

import { map, concatAll, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.css']
})
export class GroceryListItemComponent implements OnInit {
  item$ : Observable<GroceryItem> = this.route.paramMap.pipe(
    take(1),
    map(params => params.get('itemName')),
    map(itemName => this.inventoryService.getItemByName(itemName)),
    concatAll(),
  );

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService
  ) {
    
  }

  ngOnInit() { }

}