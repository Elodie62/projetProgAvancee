import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddSextoyComponent } from "./add-sextoy/add-sextoy.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "list", component: HomeComponent },
    { path: "addSextoy", component: AddSextoyComponent },
    { path: "product", component: ProductComponent },
    { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
