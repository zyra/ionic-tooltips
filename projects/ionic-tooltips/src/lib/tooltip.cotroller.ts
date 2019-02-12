import { Injectable } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';

@Injectable({
  providedIn: 'root',
})
export class TooltipController {
  allowMultiple = true;
  activeTooltips: TooltipDirective[] = [];

  addTooltip(instance: TooltipDirective) {
    if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
      this.hideAll();
    }
    this.activeTooltips.push(instance);
  }

  removeTooltip(instance: TooltipDirective) {
    this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
  }

  hideAll() {
    this.activeTooltips.forEach((tooltip: TooltipDirective) => {
      tooltip.removeTooltip();
    });
  }
}
