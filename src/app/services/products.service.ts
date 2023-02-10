import { HttpClient } from "@angular/common/http";

export class ProductService {
  constructor(private httpClient: HttpClient) {}

  public getAllProducts() {
    return this.httpClient.get("http://localhost:3000" + `/allProduct`);
  }

  public getOneProduct(productId: any) {
    return this.httpClient.get("http://localhost:3000" + `/allProduct/${productId}`);
  }

  public addProduct(data: any) {
    return this.httpClient.post("http://localhost:3000" + `/addProduct`, data);
  }

  public updateProduct(updatedData: any) {
    return this.httpClient.put("http://localhost:3000" + `/updateProduct/${updatedData.id}`, updatedData);
  }
  public deleteeProduct(productId: any) {
    return this.httpClient.delete("http://localhost:3000" + `/updateProduct/${productId}`);
  }
}
