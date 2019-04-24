import { Component } from '@angular/core';
import {Todo} from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos = [
    new Todo(1,'Perfect Angular','read the lms'),
    new Todo(2,'Finish Mondays tasks','read through monday in the lms'),
    new Todo(3,'Finish Tuesdays tasks','read through teusday in the lms'),
    new Todo(4,'Understand Everything in Angular','read the two weeks notes'),
  ]



}
