import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { CoreConfig } from './core.config';
import { CoreService } from './core.service';
import { GhibliService } from './ghibli.service';

@NgModule({
  providers: [CoreService, GhibliService]
})
export class CoreModule {
  public static forRoot(config: CoreConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: CoreConfig, useValue: config }]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    // Prevent reimport of the CoreModule.
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule ONLY'
      );
    }
  }
}
