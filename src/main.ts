import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// declare var Office: any;

console.info('App started');

if (environment.production) {
  enableProdMode();
}

declare var Office: any;

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

if (typeof Office !== 'undefined') {
  Office.initialize = function () {
    console.debug('initializing within Office');
    bootstrap();
  };
} else {
  console.debug('initializing outside of office');
  bootstrap();
}
