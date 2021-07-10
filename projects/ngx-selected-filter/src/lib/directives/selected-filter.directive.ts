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

  public getNgModelValue() {
    return this.ngModel;
  }
  private getValue(): any {
    return this.getNgModelValue() || this.getNativeValue();
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
    return this.getNativeValue() || this.getNgModelValue();
  }

  ngOnInit(): void {
    const defaultValue = this.getDefaultValue();
    this.id = this.id || this.DEFAULT_KEY;
    this.filterService.register(this.id, defaultValue);
    this.filterService.setClassName(this.id, this.filterClass);
  }
// https://stackblitz.com/edit/angular-kwstk4?file=src%2Fapp%2Fapp.component.html
  ngAfterViewInit(): void {
    this.prevValue = this.getValue();
    if (!this.getNativeValue() || this.getNativeValue() != this.getNgModelValue()) {
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
