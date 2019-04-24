import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  todos = [
    new Todo(1,'Perfect Angular','read the lms'),
    new Todo(2,'Finish Mondays tasks','read through monday in the lms'),
    new Todo(3,'Finish Tuesdays tasks','read through teusday in the lms'),
    new Todo(4,'Understand Everything in Angular','read the two weeks notes'),

    ]
  completeTodo(isComplete,index){
    if (isComplete){
      this.todos.splice(index,1);
    }
  }
  toogleDetails(index){
    this.todos[index].showDescription = !this.todos[index].showDescription;
  }
constructor() { }

ngOnInit() {
}

}
