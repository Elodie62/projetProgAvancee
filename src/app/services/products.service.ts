import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  public getAllProducts() {
    return this.httpClient.get("leod1.site:8877" + `/product/getAllProduct`);
  }

  public getOneProduct(productId: any) {
    return this.httpClient.get(
      "leod1.site:8877" + `/product/getProduct/${productId}`
    );
  }

  public addProduct(data: any) {
    return this.httpClient.post(
      "leod1.site:8877" + `/product/createProduct`,
      data
    );
  }

  public updateProduct(updatedData: any) {
    return this.httpClient.put(
      "leod1.site:8877" + `/product/updateProduct/${updatedData.id}`,
      updatedData
    );
  }

  public deleteProduct(productId: any) {
    return this.httpClient.delete(
      "leod1.site:8877" + `/product/deleteProduct/${productId}`
    );
  }
}
