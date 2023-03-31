import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeRegService } from './employee-reg.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
