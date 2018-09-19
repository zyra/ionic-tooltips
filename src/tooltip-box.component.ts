import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'tooltip-box',
  template: '{{ text }}',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('invisible', style({ opacity: 0 })),
      transition('visible <=> invisible', animate('300ms linear'))
    ])
  ],
  styles: [
    `
      :host {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        display: inline-block;
        position: fixed;
        padding: 15px 25px;
        font-size: 15px;
      }
    `,
    `
      :host.has-arrow:before {
        content: '';
        border: 5px solid transparent;
        position: absolute;
        width: 0;
        height: 0;
      }
    `,
    ':host.has-arrow.arrow-top:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }',
    ':host.has-arrow.arrow-left:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }',
    ':host.has-arrow.arrow-right:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }',
    ':host.has-arrow.arrow-bottom:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipBox implements AfterViewInit {
  @HostBinding('@fade') fadeState: string = 'invisible';

  @Input() text: string;

  @Input()
  set arrow(side: string) {
    this.rnd.setAttribute(
      this.getNativeElement(),
      'class',
      'has-arrow ' + 'arrow-' + side
    );
  }

  @Input()
  set posTop(val: number) {
    this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
  }

  @Input()
  set posLeft(val: number) {
    this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
  }

  getNativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  init: Promise<void>;

  private initResolve: Function;

  constructor(public elementRef: ElementRef, private rnd: Renderer2) {
    this.init = new Promise<void>(resolve => {
      this.initResolve = resolve;
    });
  }

  ngAfterViewInit() {
    this.initResolve();
  }
}
