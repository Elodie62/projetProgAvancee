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

//import { AddSextoyComponent } from "./add-sextoy/add-sextoy.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, ErrorComponent /* AddSextoyComponent*/],
  imports: [
    AppRoutingModule,
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
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
