import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbIconModule,
} from "@nebular/theme";

import { AppRoutingModule } from "../app/app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
//import { ProductComponent } from "./product/product.component";

@NgModule({
  declarations: [AppComponent, HomeComponent /*ProductComponent*/],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbEvaIconsModule,
    FormsModule,
  ],
    bootstrap: [AppComponent],
})
export class AppModule {}
