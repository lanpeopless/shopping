import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared';
import {
  ProductContainerComponent,
  GroupItemComponent,
  GroupShortListComponent,
  PaymentComponent,
  ConfirmOrderComponent
} from './components';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    PaymentComponent,
    ConfirmOrderComponent
  ],
  imports: [SharedModule, ProductRoutingModule]
})
export class ProductModule {}
