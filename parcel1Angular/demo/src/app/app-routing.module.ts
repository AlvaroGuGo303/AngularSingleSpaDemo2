import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent} from "./payment/payment.component";
import {SuccessComponent} from "./success/success.component";
import {APP_BASE_HREF} from "@angular/common";

const routes: Routes = [
  { path: 'app1', component: PaymentComponent },
  { path: 'app1/success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
