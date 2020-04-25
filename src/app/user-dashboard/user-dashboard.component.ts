import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
  }

  getData() {
    console.log("In Get Data");
    this.inventoryService.queryBackend()
        .subscribe(resp => {
            console.log(resp);
        });
  }

}
