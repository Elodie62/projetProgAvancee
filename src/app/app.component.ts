import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private router: any;
  constructor(router:Router) {
    this.router = router;
  }
  title = 'sextoyApp';

  isMap() {
    return this.router.url == "/home" || this.router.url == "/product" || this.router.url == "/addSextoy";
  }
}
