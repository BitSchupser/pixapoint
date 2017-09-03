import { PrivateConfig } from './private.config';
import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  pixabayApiKey: string;

  constructor() {
    this.pixabayApiKey = PrivateConfig.pixabayApiKey;
  }
}
