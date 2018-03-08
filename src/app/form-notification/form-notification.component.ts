import { Component, OnInit, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms'
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { DatePickerModule } from 'ng-datepicker';
// import { DateTimePickerModule } from 'ng-pick-datetime-fork';
import {CalendarModule} from 'primeng/calendar';


@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.css']
})
export class FormNotificationComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
      this.myForm = this._fb.group({
          name: ['', [Validators.required, Validators.minLength(5)]],
          addresses: this._fb.array([
              this.initAddress(),
          ])
      });
  }
//   public setMoment(moment: any): any {
//     this.setMoment = moment;
//     // Do whatever you want to the return object 'moment'
//   }

  initAddress() {
      return this._fb.group({
          street: ['', Validators.required],
          postcode: ['']
      });
  }

  addAddress() {
      const control = <FormArray>this.myForm.controls['addresses'];
      control.push(this.initAddress());
  }

  removeAddress(i: number) {
      const control = <FormArray>this.myForm.controls['addresses'];
      control.removeAt(i);
  }

  save(model: Customer) {
      // call API to save
      // ...
      console.log(model);
  }

}


export class CalendarDemo {

    date1: Date;

    date2: Date;

    date3: Date;

    date4: Date;

    date5: Date;

    date6: Date;
    
    date7: Date;
    
    date8: Date;
    
    date9: Date;
    
    date10: Date;
    
    date11: Date;
    
    dates: Date[];
    
    rangeDates: Date[];
    
    minDate: Date;
    
    maxDate: Date;
    
    invalidDates: Array<Date>;
    
    es: any;

    ngOnInit() {
        this.es = {
        	firstDayOfWeek: 1,
        	dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
        	dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        	dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
        	monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
            today: 'Hoy',
            clear: 'Borrar'
        };
        
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
        
        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
    }
 }

export interface Customer {
  name: string;
  addresses: Address[];
}

export interface Address {
  street: string;
  postcode: string;
}
