import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, DropdownComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
