import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../services/products.service";

@Component({
  selector: "app-add-sextoy",
  templateUrl: "add-sextoy.component.html",
  styleUrls: ["add-sextoy.component.scss"],
})
export class AddSextoyComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public today: Date = new Date();

  private base64Img: string | ArrayBuffer | null | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  public async ngOnInit(): Promise<void> {
    this.productService.getAllProducts().subscribe((x) => console.log(x));

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      catalogue_id: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      width: new FormControl(null, [Validators.required]),
      length: new FormControl(null, [Validators.required]),
      thickness: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      brand: new FormControl(null, [Validators.required]),
      release_date: new FormControl(null, [Validators.required]),
    });
  }

  handleUpload(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64Img = reader.result;
    };
  }

  public submit(): void {
    this.form.value.image = this.base64Img;
    const date = this.form.value.release_date;
    let new_date =
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    this.form.value.release_date = "2021-05-05";
    this.productService.addProduct(this.form.value);
    this.router.navigate(["/", "home"]);
  }
}
