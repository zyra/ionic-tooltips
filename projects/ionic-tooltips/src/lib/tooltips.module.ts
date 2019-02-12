import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { TooltipBox } from './tooltip-box.component';
import { TooltipController } from './tooltip.cotroller';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  entryComponents: [TooltipBox],
  declarations: [TooltipDirective, TooltipBox],
  imports: [CommonModule],
  exports: [TooltipDirective],
})
export class TooltipsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TooltipsModule,
      providers: [TooltipController],
    };
  }
}
