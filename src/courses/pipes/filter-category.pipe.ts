import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course';

@Pipe({
  name: 'filterCategory',
})
export class FilterCategoryPipe implements PipeTransform {

  transform(courses: Course[], category: string): any {
    console.log('COURSES', courses);
    console.log('CATEGORY', category);
    return courses.filter(course => course.category === category);
  }

}
