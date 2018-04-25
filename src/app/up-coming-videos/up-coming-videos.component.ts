// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-up-coming-videos',
//   templateUrl: './up-coming-videos.component.html',
//   styleUrls: ['./up-coming-videos.component.css']
// })
// export class UpComingVideosComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-up-coming-videos',
    templateUrl: './up-coming-videos.component.html',
    styleUrls: ['./up-coming-videos.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateY(20%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class UpComingVideosComponent {

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition + 500 >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

}
