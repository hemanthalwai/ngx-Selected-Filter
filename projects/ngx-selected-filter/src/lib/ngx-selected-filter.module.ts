import { NgModule } from '@angular/core';
import { SelectedFilterScopeDirective } from './directives/selected-filter-scope.directive';
import { SelectedFilterDirective } from './directives/selected-filter.directive';

@NgModule({
  declarations: [SelectedFilterScopeDirective, SelectedFilterDirective],
  imports: [
  ],
  exports: [SelectedFilterScopeDirective, SelectedFilterDirective]
})
export class NgxSelectedFilterModule { }
