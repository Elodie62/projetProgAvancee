import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public products$: any;

  constructor(private productService: ProductService) {}

  public ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }

  public getCatalogueName(catalogId: number) {
    return this.productService.getCatalogWithId(catalogId);
  }
}
