import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
    selector: 'app-new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class NewCoursesComponent implements OnInit{

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition +500 >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }
    ngOnInit() {
    
       }
}


 
// import { Component, OnInit } from '@angular/core';
 
// @Component({
//   selector: 'app-new-courses',
//   templateUrl: './new-courses.component.html',
//   styleUrls: ['./new-courses.component.css']
// })
// export class NewCoursesComponent implements OnInit{
//   constructor() { }

//   ngOnInit() {
    
//   }
// }