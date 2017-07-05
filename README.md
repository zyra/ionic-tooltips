# Ionic Tooltips
Tooltips module for apps built with Ionic Framework.

## Compatibility
This module is designed to work with `ionic-angular@^3.5.0` but it should work with any version above `2.0.0` as it doesn't heavily depend on the Ionic Framework.

## Demo
Below is a gif showing the module in action, you can also clone the example project here: https://github.com/zyra/ionic-tooltips-example
<!-- TODO add gif here -->

## Examples

The module can be used to display tooltips for any element in your app. It also provides a special treatment for buttons in the header navigation (inspired by Google's apps).

Here's a quick example to show a tooltip below a button:
```html
<!-- tooltipPositionV specifies where the tooltip should be displayed vertically, can be either top or bottom -->
<!-- arrow tells the tooltip directive to show an arrow above the tooltip box -->
<button ion-button [tooltip]="I'm a tooltip below a button" tooltipPositionV="bottom" arrow>
  Press me to see a tooltip
</button>
```

And here's another example to show a tooltip below a nav button:
```html
<ion-header>
  <ion-navbar>
    <ion-title>Page title</ion-title>
    <ion-buttons end>
      <!-- tooltipNav tells the tooltip directive that this is a nav button -->
      <ion-button icon-only [tooltip]="call" tooltipNav>
        <ion-icon name="call"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-navbar>
</ion-header>
```

## Installation
1. Make sure you have `@angular/animations` installed. If you don't have it, run the following command to install it:
```shell
npm i --save --save-exact @angular/animations@4.1.3
```
2. Install this module by running the following command:
```shell
npm i --save ionic-tooltips
```
3. Import `TooltipsModule` in your `@NgModule`. If you are using lazy module loading in your app, you might need to import it more than once.
```ts
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
   ...
   imports: [
      ...
      TooltipsModule
   ]
})
export class MyModule { ... }
```

Now you're ready to use this module. See information below for usage.

## Usage

The `tooltip` directive takes a string, which will be used as the tooltip text. When using the `tooltip` directive, you can also use the following inputs:

#### `tooltipNav`
(boolean) add this attribute or set it's value to true to specify that the tooltip belongs to a nav button. Defaults to `false`.

#### `tooltipPositionV`
(string) specifies the vertical position of the tooltip. Can be either `top` or `bottom`.

#### `tooltipPositionH`
(string) specifies the horizontal position of the tooltip. Can be either `right` or `left`.

#### `tooltipEvent`
(string) the event to show the tooltip on. Can be either `click` or `press`. Defaults to `press`.

#### `arrow`
(boolean) add this attribute or set it's value to true to show an arrow attached to the tooltip. Defaults to `false`.

