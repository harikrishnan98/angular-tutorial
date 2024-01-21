import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { CustomService } from './services/custom.service';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';


@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterCategoryPipe
  ],
  providers: [CustomService]
})
export class CoursesModule { }
