import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

export class HasSubscription implements OnDestroy {
  private _subscriptionsSubscription: Subscription = new Subscription();

  addSubscription(subscription: Subscription): void {
    this._subscriptionsSubscription.add(subscription);
  }

  ngOnDestroy(): void {
    this._subscriptionsSubscription.unsubscribe();
  }
};