import { Injectable, Optional } from '@angular/core';
import { CoreConfig } from './core.config';

@Injectable()
export class CoreService {
  // public configProoperty: any;

  constructor(@Optional() config: CoreConfig) {
    if (config) {
      // this.configProoperty = config.configProoperty;
    }
  }
}
