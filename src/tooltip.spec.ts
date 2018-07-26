import {
  AfterViewInit,
  Component,
  DebugElement,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from 'ionic-angular';

import { TooltipBox } from './tooltip-box.component';
import { Tooltip } from './tooltip.directive';
import { TooltipsModule } from './tooltips.module';

@Component({
  selector: 'tooltip-view',
  template:
    '<button #btn tooltip="Hello world" [duration]="1000" [active]="active">Click me</button>'
})
class TestPage implements AfterViewInit {
  @ViewChild('btn') button: ElementRef;

  @ViewChild(Tooltip) tooltip: Tooltip;

  active: boolean = false;

  constructor(public _viewport: ViewContainerRef) {}

  getButtonNativeElement(): HTMLButtonElement {
    return this.button.nativeElement;
  }

  getTooltip(): Tooltip {
    return this.tooltip;
  }

  ngAfterViewInit() {
    (this.tooltip as any).appRef.components.push({
      _component: this
    });
  }
}

describe('Tooltip', () => {
  let de: DebugElement,
    comp: TestPage,
    fixture: ComponentFixture<TestPage>,
    tooltip: any,
    getTooltipBox: () => TooltipBox;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestPage],
      imports: [
        IonicModule.forRoot(TestPage), // to be able to inject Platform
        BrowserAnimationsModule, // needed for TooltipsModule
        TooltipsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    console.log(!!fixture, !!comp, !!de, !!tooltip);

    fixture = TestBed.createComponent(TestPage);
    fixture.autoDetectChanges(true);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    tooltip = comp.getTooltip();
    getTooltipBox = () => tooltip.tooltipElement.instance;
  });

  it('container page should exist', () => {
    expect(comp).toBeDefined();
    expect(comp instanceof TestPage).toBeTruthy();
  });

  it('should display TooltipBox on click for 1s', () => {
    tooltip.onClick();
    fixture.detectChanges();
    expect(tooltip.tooltipElement).toBeDefined();
    setTimeout(() => {
      fixture.detectChanges();
      expect(tooltip.tooltipElement).toBeUndefined();
    }, 1000);
  });

  it('should display TooltipBox on press for 1s', () => {
    tooltip.event = 'press';
    tooltip.onPress();
    fixture.detectChanges();
    expect(tooltip.tooltipElement).toBeDefined();
    setTimeout(() => {
      fixture.detectChanges();
      expect(tooltip.tooltipElement).toBeUndefined();
    }, 1000);
  });

  it('should display TooltipBox when active', () => {
    tooltip.active = true;
    expect(tooltip.tooltipElement).toBeDefined();
    expect(tooltip.active).toBeTruthy();
  });

  it('should contain "Hello world"', () => {
    tooltip.active = true;
    fixture.detectChanges();
    expect(getTooltipBox().getNativeElement().innerText).toEqual('Hello world');
  });
});
