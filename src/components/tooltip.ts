import {
  Directive, ElementRef, Input, ApplicationRef, ComponentFactoryResolver,
  ViewContainerRef, ComponentRef
} from '@angular/core';
import { Platform } from 'ionic-angular';
import { TooltipBoxComponent } from '../tooltip-box/tooltip-box';

@Directive({
  selector: '[tooltip]',
  host: {
    '(press)': 'onPress()'
  }
})
export class Tooltip {

  @Input() tooltip: string;
  @Input() tooltipNav: boolean = false;
  @Input() tooltipPositionV: string;
  @Input() tooltipPositionH: string;
  @Input()
  set arrow(val: boolean) {
    this._arrow = typeof val !== 'boolean' || val != false;
  }
  get arrow(): boolean { return this._arrow; }

  private _arrow: boolean = false;
  private tooltipElement: ComponentRef<TooltipBoxComponent>;
  private tooltipTimeout: any;
  private canShow: boolean = true;

  constructor(
    private el: ElementRef
    , private appRef: ApplicationRef
    , private platform: Platform
    , private _componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onPress() {
    if (!this.canShow) return;

    if (this.tooltipElement) {
      this.resetTimer();
    } else {
      this.showTooltip();
    }
  }


  showTooltip() {

    this.createTooltipComponent();

    const tooltipComponent: TooltipBoxComponent = this.tooltipElement.instance;

    tooltipComponent.text = this.tooltip;
    tooltipComponent.init.then(() => {

      const tooltipPosition = this.getTooltipPosition();

      tooltipComponent.posLeft = tooltipPosition.left;
      tooltipComponent.posTop = tooltipPosition.top;

      tooltipComponent.fadeState = 'visible';

      if (this.arrow) {
        let arrowPosition;
        if (this.tooltipPositionV === 'top') {
          arrowPosition = 'bottom';
        } else if (this.tooltipPositionV === 'bottom') {
          arrowPosition = 'top';
        } else if (this.tooltipPositionH === 'left') {
          arrowPosition = 'right';
        } else {
          arrowPosition = 'left';
        }
        tooltipComponent.arrow = arrowPosition;
      }

      this.tooltipTimeout = setTimeout(this.removeTooltip.bind(this), 3000);

    });

  }

  private createTooltipComponent() {
    let
      viewport: ViewContainerRef = (<any>this.appRef.components[0])._component._viewport,
      componentFactory = this._componentFactoryResolver.resolveComponentFactory(TooltipBoxComponent);

    this.tooltipElement = viewport.createComponent(componentFactory);
  }

  private getTooltipPosition() {
    const
      tooltipNativeElement: HTMLElement = this.tooltipElement.instance.getNativeElement(),
      el: HTMLElement = this.el.nativeElement,
      rect: ClientRect = el.getBoundingClientRect();

    let positionLeft: number, positionTop: number, spacing: number = 10;

    if (this.tooltipNav) {
      this.tooltipPositionV = 'bottom';
      this.arrow = false;
      spacing = 20;
    }


    if (this.tooltipPositionH === 'right') {
      positionLeft = rect.right + spacing;
    } else if (this.tooltipPositionH === 'left') {
      positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth;
    } else if (this.tooltipNav) {
      positionLeft = rect.left + el.offsetWidth / 2
    } else {
      positionLeft = rect.left;
    }

    if (this.tooltipPositionV === 'top') {
      positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
    } else if(this.tooltipPositionV === 'bottom') {
      positionTop = rect.bottom + spacing;
    } else {
      positionTop = (rect.top + el.offsetHeight / 2) - tooltipNativeElement.offsetHeight / 2;
    }

    if (positionLeft + tooltipNativeElement.offsetWidth + spacing > this.platform.width()) {
      positionLeft = this.platform.width() - tooltipNativeElement.offsetWidth - spacing;
    } else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
      positionLeft = spacing;
    }

    return {
      left: positionLeft,
      top: positionTop
    };
  }

  private removeTooltip() {
    if (!this.tooltipElement) {
      this.tooltipElement = undefined;
      this.tooltipTimeout = undefined;
      return;
    }

    this.tooltipElement.instance.fadeState = 'invisible';

    this.canShow = false;

    setTimeout(() => {
      this.tooltipElement.destroy();
      this.tooltipElement = undefined;
      this.tooltipTimeout = undefined;
      this.canShow = true;
    }, 300);
  }

  private resetTimer() {
    clearTimeout(this.tooltipTimeout);
    this.tooltipTimeout = setTimeout(this.removeTooltip.bind(this), 3000);
  }

}
