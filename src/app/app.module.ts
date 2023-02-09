import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule } from "@nebular/theme";
import { AppRoutingModule } from "../app/app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
