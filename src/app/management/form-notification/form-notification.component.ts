import { Component, OnInit, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.css']
})

export class FormNotificationComponent implements OnInit {

  public myNotificationFormHolder: FormGroup;
  constructor(private notificationFormHolderBuilder: FormBuilder) { }

  ngOnInit() {
      this.myNotificationFormHolder = this.notificationFormHolderBuilder.group({
        title: ['', [Validators.required, Validators.minLength(5)]],
        // titles: this.notificationFormHolderBuilder.array([
        //       this.initTitle(),
        //   ]),
        description: ['', []],
        target: ['', []],
      });
  }
  public setMoment(moment: any): any {
    this.setMoment = moment;
    // Do whatever you want to the return object 'moment'
  }

  initDescription() {
      return this.notificationFormHolderBuilder.group({
           });
  }

  addDescription() {
      const control = <FormArray>this.myNotificationFormHolder.controls['Descriptions'];
      control.push(this.initTitle());
  }

  removeDescription(i: number) {
      const control = <FormArray>this.myNotificationFormHolder.controls['Descriptions'];
      control.removeAt(i);
  }

  initTitle() {
    return this.notificationFormHolderBuilder.group({
        street: ['', Validators.required],
        postcode: ['']
    });
}

addTitle() {
    const control = <FormArray>this.myNotificationFormHolder.controls['Titles'];
    control.push(this.initTitle());
}

removeTitle(i: number) {
    const control = <FormArray>this.myNotificationFormHolder.controls['Titles'];
    control.removeAt(i);
}


initTarget() {
  return this.notificationFormHolderBuilder.group({
       });
}

addTarget() {
  const control = <FormArray>this.myNotificationFormHolder.controls['Targets'];
  control.push(this.initTitle());
}

removeTarget(i: number) {
  const control = <FormArray>this.myNotificationFormHolder.controls['Targets'];
  control.removeAt(i);
}

  save(model: Customer) {
      // call API to save
      // ...
      console.log(model);
  }

  postNotification(title: string, description: string, doi_tuong: string): boolean {
    // TODO: serialize title, description, target.
    function censor(key, value) {
        if (typeof(value) === 'string') {
          return undefined;
        }
        return value;
    }
    const foo = { title: 'title', description: 'description', doi_tuong : 'target'};
    const jsonString = JSON.stringify(foo, censor);
    console.log(jsonString.toString());

    return true;
  }
}

export interface Customer {
  name: string;
  titles: Title[];
  description: string;
}

export interface Title {
  street: string;
  postcode: string;
}
