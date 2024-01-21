import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

let counter = 0;
@Injectable({
  providedIn: 'root'
})
export class CustomService {

  public id: number;
  constructor(private http: HttpClient) {
    counter++;
    this.id = counter;
    console.log('CONSTRUCTOR of CUSTOM SERVICE', counter);
   }

  public loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      params.set("page","1");
      params.set("pageSize","10");
      return this.http.get<Course[]>('http://localhost:9000/api/courses', {params});
  }

  public saveCourse(course: Course) {
      const headers = new HttpHeaders();
      headers.set("X-Auth", "userId");
      return this.http.put(`http://localhost:9000/api/courses/${course.id}`, course, {headers});
  }
}
 