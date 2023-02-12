import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { skip } from "rxjs";
import { ProductService } from "../services/products.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
  public catalogueName: string = "";
  private possiblePrice: number | undefined;
  private possibleImg: string = "";
  @Input() editMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, public productService: ProductService) {}

  public async ngOnInit(): Promise<void> {
    const { id: productId } = this.route.snapshot.queryParams;
    this.productService.getOneProduct(productId).subscribe();

    this.productService.currentProducts$.pipe(skip(1)).subscribe((product) => {
      this.productService.getCatalogWithId(product.catalogue_id).subscribe((catalog) => {
        this.catalogueName = catalog.name;
        this.possiblePrice = product.price;
      });
    });
  }

  public onPriceChange(product: any): void {
    this.possiblePrice = product;
  }
  public onInputChange(event: any): void {
    //this.possibleImg = `data:image/png;base64,${btoa(event)}`;
    const inputEvent = event.target as HTMLInputElement;
    if (inputEvent.files) {
      const file = inputEvent.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.possibleImg = reader.result as string;
       };
     }
  }

  public async save(product: any): Promise<void> {
    this.editMode = false;
    this.productService
      .updateProduct({
        ...product,
        price: this.possiblePrice,
        image: this.possibleImg,
      })
      .subscribe();
  }

  public setEditMode(): void {
    this.editMode = true;
  }

  public async delete(productId: any): Promise<void> {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.router.navigate(["/home"]);
    });
  }
  public async goBack(): Promise<void> {
    this.editMode = false;
  }
}
