import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tooltip } from './tooltip.directive';
import { TooltipBox } from './tooltip-box.component';

@NgModule({
  entryComponents: [
    TooltipBox
  ],
  declarations: [
    Tooltip,
    TooltipBox,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    Tooltip
  ]
})
export class TooltipsModule {}
