import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Inject,
    InjectionToken,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    Self,
    SimpleChanges,
    SkipSelf,
    ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CustomService } from '../services/custom.service';
import { HttpClient } from '@angular/common/http';




@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, OnChanges, AfterViewChecked, AfterViewInit, AfterContentInit, DoCheck, OnDestroy {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    public animal: any
    constructor(private customService: CustomService, @Attribute('type') private type: string) {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('CUSTOM SERVICE FROM COURSE-CARD', this.customService.id);
        console.log('TYPE', this.type);
        console.log('ngOnInit');
      
    }

  
    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});
    
    }
 

    public onTitleChanged(newTitle: string): void {
        this.course.description = newTitle;
        
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges',changes);

    }

    public onTest(): void {
        console.log('onTest');
      }

    public ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    public  ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }

    public  ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
    }

     public ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    public ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }
}

