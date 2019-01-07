import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TooltipController } from './tooltip.cotroller';

import { TooltipBox } from './tooltip-box.component';
import { Tooltip } from './tooltip.directive';

@NgModule({
  entryComponents: [TooltipBox],
  declarations: [Tooltip, TooltipBox],
  imports: [IonicModule],
  exports: [Tooltip]
})
export class TooltipsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TooltipsModule,
      providers: [TooltipController]
    };
  }
}
