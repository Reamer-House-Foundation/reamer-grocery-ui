import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InventoryService } from '../inventory.service';
import { NewItemCartService } from '../new-item-cart.service';
import { Observable, of } from 'rxjs';
import { GroceryItem } from '../models/grocery-item.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItemForm: FormGroup;
  cartItems: GroceryItem[];
  disabled: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private newItemCartService: NewItemCartService
  ) {
    this.newItemForm = this.formBuilder.group({
      name: null,
      count: null,
      units: null,
    });
  }

  ngOnInit() {
    this.newItemCartService.getItems()
    .subscribe(items => this.cartItems = items);
  }

  checkOut() {
    if (this.disabled === true) return;
    
    this.disabled = true;
    this.newItemCartService.checkOut(() => {
      this.disabled = false;
    });
  }

  onSubmit(newItem) {
    this.newItemCartService.addItemToCart(newItem);
    this.newItemForm.reset();
  }
}