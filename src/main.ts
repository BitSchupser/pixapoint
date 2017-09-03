import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// declare var Office: any;

console.info("App started")

if (environment.production) {
  enableProdMode();
}
declare var Office: any;
if (typeof Office !== 'undefined') {
  // when Office has initalized, manually bootstrap the app
  Office.initialize = function () {
    console.debug("initializing within Office")
    platformBrowserDynamic().bootstrapModule(AppModule);
  };
} else {
  console.debug("initializing outside of office")
  platformBrowserDynamic().bootstrapModule(AppModule);
}
