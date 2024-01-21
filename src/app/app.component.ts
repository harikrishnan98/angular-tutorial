import {AfterContentChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, DoCheck, ElementRef, Inject, InjectionToken, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {CourseCardComponent} from '../courses/course-card/course-card.component';
import {HighlightedDirective} from '../courses/directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';
import { Course } from 'src/courses/model/course';
import { CustomService } from 'src/courses/services/custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {

  // public courses$: Observable<Course[]>;
  public courses: Course[] = COURSES;

  public isLoaded: boolean = false;

  @ViewChild('child', {read: 'ElementRef'}) public children: ElementRef<any>;

  constructor(private customService: CustomService, @Inject(CONFIG_TOKEN) private config: AppConfig,
  private cd: ChangeDetectorRef) {
   console.log(this.config)

  }

  ngOnInit() {
      // this.courses$ = this.customService.loadCourses();
      // this.customService.loadCourses().subscribe((val) => {
      //   this.courses = val;
      //   this.isLoaded = true;
      // })

      console.log('Config', this.config);
  }


  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  //   if(this.isLoaded) {
  //     this.cd.markForCheck();
  //     console.log('ngDoCheck cd.markForCheck()');
  //     this.isLoaded = false;
  //   }
    
  // }

  ngAfterViewInit() { 
      console.log('CHILDREN', this.children); 
      // this.children.toArray().forEach((child) => {
      //     console.log('CHILD', child.nativeElement);
      // })
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit.....')
  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked...!')
  }

  public save(course: Course): void {
    this.customService.saveCourse(course).subscribe(data => console.log('Saved Course', data));;
  }

  public onEditCourse(): void {
    // const course = this.courses[0];
    // const newCourse = {...course,description: 'ngOnChanges'}
    const obj = {
      id: 11,
      description: 'Angular Server side rendering Course',
      longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
      category: 'BEGINNER',
      lessonsCount: 10
  };
      this.courses[0].category = 'ADVACNED'; 

  }

  public onTest(): void {
    console.log('onTest');
  }

  public ngOnDestroy(): void {
      
  }
}
