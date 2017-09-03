import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// declare var Office: any;

console.info("App started")

if (environment.production) {
  enableProdMode();
}

//   if (Office) {
//   // when Office has initalized, manually bootstrap the app
//   Office.initialize = function () {
//     console.debug("initializing within Office")
//     platformBrowserDynamic().bootstrapModule(AppModule);
// //    angular.bootstrap(document.body, ['pixa-point']);
//   };
// } else {
  console.info("initializing outside of office")
  platformBrowserDynamic().bootstrapModule(AppModule);
// }
