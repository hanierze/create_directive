import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  @Input('appTimes') set render(times : number){
    for(let i=0 ; i<times ; i++){
      this.VCRef.createEmbeddedView(this.templateRef , {
        index : i
      });
    }
  }

  constructor(
    private templateRef : TemplateRef<any> ,
    private VCRef : ViewContainerRef
  ) { }

}
