import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private router: any;
  constructor(router:Router) {
    this.router = router;
  }
  title = 'sextoyApp';

  isMap() {
    const routerUrlParse = this.router.url.split("?")[0];
    return routerUrlParse == "/home" || routerUrlParse == "/product" || routerUrlParse == "/addSextoy";
  }
}
