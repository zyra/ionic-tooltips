import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tooltip } from './components/tooltip';
import { TooltipBox } from './components/tooltip-box';

@NgModule({
    declarations: [
        Tooltip,
        TooltipBox,
    ],
    imports: [ IonicModule ],
    exports: [ Tooltip ]
})
export class TooltipsModule { }