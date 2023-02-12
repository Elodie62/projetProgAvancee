import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subject, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private currentProducts = new BehaviorSubject<any>(null);
  public readonly currentProducts$ = this.currentProducts.asObservable();

  constructor(private httpclient: HttpClient) {}

  public getAllProducts() {
    return this.httpclient.get("http://leod1.site:8877" + `/product/getAllProduct`);
  }

  public getOneProduct(productId: any): Observable<any> {
    return this.httpclient
      .get("http://leod1.site:8877" + `/product/getProduct/${productId}`)
      .pipe(map((product) => this.currentProducts.next(product)));
  }

  public addProduct(data: any) {
    return this.httpclient
      .post("http://leod1.site:8877" + `/product/createProduct`, data)
      .subscribe();
  }

  public updateProduct(updatedData: any) {
    return this.httpclient
      .put("http://leod1.site:8877" + `/product/updateProduct/${updatedData.id}`, updatedData)
      .pipe(map((product) => this.currentProducts.next(product)));
  }

  public deleteProduct(productId: any) {
    return this.httpclient.delete("http://leod1.site:8877" + `/product/deleteProduct/${productId}`);
  }

  public getCatalogWithId(catalogId: number): Observable<any> {
    return this.httpclient.get("http://leod1.site:8877" + `/catalogue/getCatalogue/${catalogId}`);
  }
}
