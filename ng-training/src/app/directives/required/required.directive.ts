import { Directive, ElementRef, HostListener, Input, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[Required]'
})
export class RequiredDirective implements AfterViewChecked {

  // Is check required.
  @Input() isCheckRequire = true;

  constructor(private el: ElementRef) {
    console.log('[0]isCheckRequire = ' + this.isCheckRequire);
    setTimeout(() => {
      this.checkValue(el);
    }, 300)
  }

  /**
   * Check event.
   */
  @HostListener('keyup')
  @HostListener('change')
  checkValueOnkeyup() {
    console.log('[1]isCheckRequire = ' + this.isCheckRequire);
    if (this.isCheckRequire) {
      this.checkValue(this.el);
    }
  }

  /**
   * Check view default border color.
   */
  ngAfterViewChecked() {
    console.log('[3]isCheckRequire = ' + this.isCheckRequire);

    if (this.isCheckRequire) {
      this.checkValue(this.el);

    } else {
      this.el.nativeElement.style.border = '';
    }
  }

  /**
   * Border set red color.
   */
  checkValue(ele: ElementRef) {
    console.log(ele);
    console.log(ele.nativeElement.value);

    if (ele.nativeElement.tagName === 'SELECT') {

      if (ele.nativeElement.selectedOptions.length === 0) {
        ele.nativeElement.style.border = '1px solid red';

      } else if (ele.nativeElement.selectedOptions[0].accessKey) {
        ele.nativeElement.style.border = '';

      } else {
        ele.nativeElement.style.border = '1px solid red';
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
