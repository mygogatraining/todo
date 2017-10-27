import { Directive, Input, ElementRef, Renderer } from "@angular/core";

@Directive({
    selector: 'img[image]',
    host: {
        '[src]': 'checkPath(src)',
        '[alt]': 'addAlt(src)',
        '(error)': 'error()'
    }
})

export class MediaUrlDirective {
    
    @Input() src: string;
    @Input() alt: string;

    public defaultImg: 'assets/default.png';

    constructor(private el: ElementRef, private renderer: Renderer) {}

    public checkPath(value) {
        return value? value : this.defaultImg;
    }
    public addAlt(value) {
        this.alt = value;
    }
    public error() {
        this.src = this.defaultImg;
    }
}