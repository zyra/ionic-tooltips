import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tooltip } from './tooltip.directive';
import { TooltipBox } from './tooltip-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const childArgs: NgModule = {
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
const rootArgs: NgModule = Object.assign({}, childArgs);
rootArgs.imports.push(BrowserAnimationsModule);

@NgModule(childArgs)
export class TooltipsChildModule {}

@NgModule(rootArgs)
export class TooltipsModule {
  static forChild(): ModuleWithProviders {
    return {
      ngModule: TooltipsChildModule
    }
  }
}
