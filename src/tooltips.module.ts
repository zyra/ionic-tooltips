import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tooltip } from './tooltip.directive';
import { TooltipBox } from './tooltip-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  entryComponents: [
    TooltipBox
  ],
    declarations: [
        Tooltip,
        TooltipBox,
    ],
    imports: [
      IonicModule,
      BrowserAnimationsModule
    ],
    exports: [
      Tooltip
    ]
})
export class TooltipsModule {}
