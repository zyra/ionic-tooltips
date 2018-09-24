import { Injectable } from '@angular/core';

@Injectable()
export class TooltipProvider {
  concurrency: boolean = true;
  activeTooltips: any[] = [];

  constructor(){
  }

  newTooltip(newTooltip) {
    if((!this.concurrency && this.activeTooltips.length > 0) || newTooltip.hideOthers) {
      this.activeTooltips.forEach(tooltip => {
        tooltip.hide();
      });
    }
    this.activeTooltips.push(newTooltip);
  }

  removeTooltip(oldTooltip: any) {
    this.activeTooltips.splice(this.activeTooltips.indexOf(oldTooltip), 1);
  }
}
