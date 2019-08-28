import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Dropdown, DropdownItem } from '../interfaces/dropdown.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genderData: Dropdown = {
    data: [
      {
        key: 0,
        value: 'Male'
      }, {
        key: 1,
        value: 'Female'
      }, {
        key: 2,
        value: 'Unknown'
      }
    ]
  };
  selectedGender: DropdownItem = this.genderData.data[0];
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      gender: [this.selectedGender]
    });
  }

  onSubmitTemplateDriven() {
    // Do something with selectedGender Model
    console.log(this.selectedGender);
  }

  onSubmitReactiveDriven() {
    // Do something with formGroup Controls
    console.log(this.formGroup.controls['gender']);
  }
}
