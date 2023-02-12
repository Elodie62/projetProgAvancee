import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpclient: HttpClient) {}

  public getAllProducts() {
    return this.httpclient.get(
      "http://leod1.site:8877" + `/product/getAllProduct`
    );
  }

  public getOneProduct(productId: any) {
    return this.httpclient.get(
      "http://leod1.site:8877" + `/product/getProduct/${productId}`
    );
  }

  public addProduct(data: any) {
    return this.httpclient.post(
      "http://leod1.site:8877" + `/product/createProduct`,
      data
    ).subscribe();
  }

  public updateProduct(updatedData: any) {
    return this.httpclient.put(
      "http://leod1.site:8877" + `/product/updateProduct/${updatedData.id}`,
      updatedData
    );
  }

  public deleteProduct(productId: any) {
    return this.httpclient.delete(
      "http://leod1.site:8877" + `/product/deleteProduct/${productId}`
    );
  }

  public getCatalogWithId(catalogId: number) {
    return this.httpclient.get(
      "http://leod1.site:8877" + `/catalogue/getCatalogue/${catalogId}`
    );
  }
}
