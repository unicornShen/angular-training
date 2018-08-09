import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Required]'
})
export class RequiredDirective {
  constructor(private el: ElementRef) {
    setTimeout(() => {
      this.checkValue(el);
    }, 300)
  }

  @HostListener('keyup')
  @HostListener('change')
  checkValueOnkeyup() {
    this.checkValue(this.el);
  }

  /**
   * 紅色外框提示:
   */
  checkValue(ele: ElementRef) {
    console.log(ele);
    console.log(ele.nativeElement.value);

    if (ele.nativeElement.tagName === 'SELECT') {
      if (ele.nativeElement.selectedIndex === 0) {
        ele.nativeElement.style.border = '1px solid red';

      } else {
        ele.nativeElement.style.border = '';
      }
    } else {
      if (ele.nativeElement.value) {
        ele.nativeElement.style.border = '';

      } else {
        ele.nativeElement.style.border = '1px solid red';
      }
    }

  }
}
