import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbDatepickerModule,
  NbButtonModule,
  NbIconModule,
} from "@nebular/theme";
import { AppRoutingModule } from "../app/app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AddSextoyComponent } from "./add-sextoy/add-sextoy.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { ProductComponent } from "./product/product.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductComponent, AddSextoyComponent],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    NbButtonModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbIconModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
