import { Injectable } from '@angular/core';

@Injectable()
export class TooltipProvider {
  concurrency: boolean = true;
  activeTooltips: any[] = [];

  constructor(){
  }

  newTooltip(newTooltip) {
    console.log('new tooltip', newTooltip);
    if((!this.concurrency && this.activeTooltips.length > 0) || newTooltip.hideOthers) {
      this.activeTooltips.forEach(tooltip => {
        tooltip.hide();
      });
    }
    this.activeTooltips.push(newTooltip);
    console.log('your tooltips', this.activeTooltips);
  }

  removeTooltip(oldTooltip: any) {
    console.log('removing tooltip');
    this.activeTooltips.splice(this.activeTooltips.indexOf(oldTooltip), 1);
    console.log('your tooltips', this.activeTooltips);
  }
}
