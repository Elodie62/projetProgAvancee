import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs";
import { ProductService } from "../services/products.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public products$: any;

  constructor(private productService: ProductService, private router: Router) {}

  public ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }

  public getCatalogueName(catalogId: number) {
    return this.productService.getCatalogWithId(catalogId);
  }

  public redirect(productId: number) {
    this.router.navigate(["/product"], { queryParams: { id: productId } });
  }
}
