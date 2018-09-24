import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TooltipProvider } from './providers/tooltip';

import { TooltipBox } from './tooltip-box.component';
import { Tooltip } from './tooltip.directive';

@NgModule({
  entryComponents: [TooltipBox],
  declarations: [Tooltip, TooltipBox],
  imports: [IonicModule],
  exports: [Tooltip],
  providers: [
    TooltipProvider
  ]
})
export class TooltipsModule {}
