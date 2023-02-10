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
} from "@nebular/theme";
import { AppRoutingModule } from "../app/app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AddSextoyComponent } from "./add-sextoy/add-sextoy.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent, AddSextoyComponent],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
