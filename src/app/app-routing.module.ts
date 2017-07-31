import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabExercise1 } from './lab-exercise1-component';
import { LabExercise2 } from './lab-exercise2-component';



const routes: Routes = [
  { path: '', redirectTo: '/labExercise1', pathMatch: 'full' },
  { path: 'labExercise1', component: LabExercise1 }
  // { path: 'labExercise2', component: LabExercise2 }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
