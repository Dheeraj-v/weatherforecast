import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherlistComponent } from './components/weatherlist/weatherlist.component';
import { WeatheritemComponent } from './components/weatheritem/weatheritem.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherlistComponent,
    WeatheritemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
