import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NasaComponent } from './nasa/nasa.component';
import { HeaderComponent } from './header/header.component';
import { GiphyComponent } from './giphy/giphy.component';
import { SetlistfmComponent } from './setlistfm/setlistfm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NasaComponent,
    HeaderComponent,
    GiphyComponent,
    SetlistfmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
