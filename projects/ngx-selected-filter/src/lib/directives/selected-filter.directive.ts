import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { NgxSelectedFilterService } from '../services/ngx-selected-filter.service';

@Directive({
  selector: '[selectedFilter]'
})
export class SelectedFilterDirective implements OnInit, OnDestroy, AfterViewInit {

  @Input('selectedFilter') id: string;
  @Input() filterClass: string;

  @Input() ngModel: any;

  private prevValue: string;
  private readonly DEFAULT_KEY = 'default';

  constructor(private element: ElementRef,
              private filterService: NgxSelectedFilterService
              ) {
  }

  private getValue(): any {
    return this.element.nativeElement.value || this.ngModel;
  }

  private getNativeValue(): any {
    return this.element.nativeElement.value;
  }

  @HostListener('change', ['$event']) onChange(event)  {
    this.filterService.setCleanValue(this.id, this.element.nativeElement.value, this.prevValue);
    this.prevValue = event.target.value;
    this.filterService.calculate(this.id);
  }


  private getDefaultValue(): string {
    let temp = this.getValue();
    if (!temp && this.element.nativeElement.options.length) {
      temp = this.element.nativeElement.options[0].value;
      this.ngModel = temp;
    }
    return temp;
  }

  ngOnInit(): void {
    const defaultValue = this.getValue();
    this.id = this.id || this.DEFAULT_KEY;
    this.filterService.register(this.id, defaultValue);
    this.filterService.setClassName(this.id, this.filterClass);
  }

  ngAfterViewInit(): void {
    this.prevValue = this.getValue();
    if (!this.getNativeValue()) {
      this.element.nativeElement.value = this.prevValue;
    }
    this.filterService.setValue(this.id, this.prevValue);
    this.filterService.calculate(this.id);
  }

  ngOnDestroy(): void {
    this.filterService.unregister(this.id, this.getValue());
    this.filterService.calculate(this.id);
  }
}
