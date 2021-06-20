import { AfterContentInit, Directive, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxSelectedFilterService } from './ngx-selected-filter.service';
import { SelectedFilterDirective } from './selected-filter.directive';

@Directive({
  selector: '[selectedFilterScope]',
  providers: [NgxSelectedFilterService]
})
export class SelectedFilterScopeDirective implements OnInit, AfterContentInit {

  @ViewChildren(SelectedFilterDirective)filterOptionDirective: QueryList<SelectedFilterDirective>;


  constructor(private element: ElementRef,
              private filterService: NgxSelectedFilterService,
              ) {

  }

  ngAfterContentInit(): void {
    if (!this.filterOptionDirective) {
      return;
    }
  }

  ngOnInit(): void {
    this.filterService.registerRootElement(this.element);
  }

}
