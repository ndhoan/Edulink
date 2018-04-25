import { Component, OnInit, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms'

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

export interface Customer {
  name: string;
  addresses: Address[];
}

export interface Address {
  street: string;
  postcode: string;
}
