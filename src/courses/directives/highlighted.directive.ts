import {Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output} from '@angular/core';
import { CustomService } from '../services/custom.service';

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl'
})
export class HighlightedDirective {

    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighlight = new EventEmitter();

    constructor(@Host() private customService: CustomService) {

        console.log('Directive created..', this.customService);

    }

    @HostBinding('class.highlighted') public highlight: boolean = false;
    // get cssClasses() {
    //     return this.isHighlighted;
    // }

    @HostListener('mouseover', ['$event'])
    mouseOver($event) {

        console.log($event);
        this.highlight = true;
        this.isHighlighted = true;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    mouseLeave() {
        this.isHighlighted = false;
        this.highlight = false; 
        this.toggleHighlight.emit(this.isHighlighted);
    }

    toggle() {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }



}
