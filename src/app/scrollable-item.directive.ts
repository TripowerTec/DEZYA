import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollableItem]'
})
export class ScrollableItemDirective {

  @Input('appScrollableItem') public key: string
  constructor(private el: ElementRef<HTMLElement>) {}

  public scrollIntoView() {
    debugger;
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

}