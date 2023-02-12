import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/products.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public products$: any;
  public catalogList: any = {
    1: "Sextoys Féminin",
    2: "Sextoys Masculin",
    3: "Accessoires",
    4: "Lingeries",
  };

  constructor(private productService: ProductService) {}

  public ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }
}
