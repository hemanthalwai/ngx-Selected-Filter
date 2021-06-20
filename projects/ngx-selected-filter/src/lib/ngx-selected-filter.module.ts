import { NgModule } from '@angular/core';
import { NgxSelectedFilterComponent } from './ngx-selected-filter.component';
// import { NgxSelectedFilterComponent } from './ngx-selected-filter.component';
import { SelectedFilterScopeDirective } from './selected-filter-scope.directive';
import { SelectedFilterDirective } from './selected-filter.directive';

@NgModule({
  declarations: [SelectedFilterScopeDirective, SelectedFilterDirective, NgxSelectedFilterComponent],
  imports: [
  ],
  exports: [SelectedFilterScopeDirective, SelectedFilterDirective, NgxSelectedFilterComponent]
})
export class NgxSelectedFilterModule { }
