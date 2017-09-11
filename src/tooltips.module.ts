import { childArgs } from './tooltips.child.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const rootArgs: NgModule = Object.assign({}, childArgs);
rootArgs.imports.push(BrowserAnimationsModule);

@NgModule(rootArgs)
export class TooltipsModule {}
