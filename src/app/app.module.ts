import { HttpClientModule } from '@angular/common/http';
import { OfficeService } from './service/office.service';
import { Base64coder } from './service/base64coder';
import { Config } from './config';
import { ImageQueryService } from './service/image-query.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImageQueryService,
    Config,
    Base64coder,
    OfficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
