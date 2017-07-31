import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LabExercise1 } from './lab-exercise1-component';
import { LabExercise2 } from './lab-exercise2-component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
 
  ],
  declarations: [
    AppComponent,
    LabExercise1,
    LabExercise2

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
