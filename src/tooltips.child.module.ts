import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tooltip } from './tooltip.directive';
import { TooltipBox } from './tooltip-box.component';

export const childArgs: NgModule = {
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
};

@NgModule(childArgs)
export class TooltipsChildModule {}