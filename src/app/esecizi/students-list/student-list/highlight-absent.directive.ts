import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightAbsent]',
  standalone: true
})
export class HighlightAbsentDirective implements OnInit {
  @Input('appHighlightAbsent') isPresent: boolean = true;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.isPresent) {
      this.el.nativeElement.style.opacity = '0.55';
      this.el.nativeElement.style.fontStyle = 'italic';
    }
  }
}
