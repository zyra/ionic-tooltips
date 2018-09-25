import { Injectable } from '@angular/core';
import { Tooltip } from './tooltip.directive';

@Injectable()
export class TooltipController {
  allowMultiple: boolean = true;
  activeTooltips: Tooltip[] = [];

  addTooltip(instance: Tooltip) {
    if(instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
      this.hideAll();
    }
    this.activeTooltips.push(instance);
  }

  removeTooltip(instance: Tooltip) {
    this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
  }

  hideAll() {
    this.activeTooltips.forEach((tooltip: Tooltip) => {
      tooltip.removeTooltip();
    });
  }
}
