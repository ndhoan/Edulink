
// import { Component, OnInit} from '@angular/core';

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   query,
//   stagger,
//   transition
// } from '@angular/animations';
// @Component({
//   selector: 'app-new-courses',
//   templateUrl: './new-courses.component.html',
//   styleUrls: ['./new-courses.component.css'],
//   animations: [
//     trigger('photosAnimation', [
//       transition('* => *', [
//         query('img',style({ transform: 'translateX(-100%)'})),
//         query('img',
//           stagger('600ms', [
//             animate('900ms', style({ transform: 'translateX(0)'}))
//         ]))
//       ])
//     ])
//   ]
  
// })
// export class NewCoursesComponent implements OnInit {
//   show = false;

//   constructor() { }

//   get stateName() {
//     return this.show ? 'show' : 'hide'
//   }


//   toggle() {
//     this.show = !this.show;
//   }
 
//   ngOnInit() {
    
//   }

 
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.css']
})
export class NewCoursesComponent implements OnInit{
  constructor() { }

  ngOnInit() {
    
  }
}