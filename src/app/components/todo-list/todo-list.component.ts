import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<any> | undefined;
  constructor() { }

  ngOnInit(): void {
    this.fetchTodoList();
  }

  private fetchTodoList(): void {
    this.todoList$ = of([]);
  }

}
