import { Component, HostListener, Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') c_colorrr = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.c_colorrr = '#ccc';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.c_colorrr = '';
  }

  constructor() { }
}
