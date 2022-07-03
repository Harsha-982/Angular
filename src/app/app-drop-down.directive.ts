import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppDropDown]'
})
export class AppDropDownDirective {

  @HostBinding('class.open')isOpen=false;
  @HostListener('click') onCickExceute(event:Event){
    this.isOpen=!this.isOpen
  }
  constructor() { }

}
