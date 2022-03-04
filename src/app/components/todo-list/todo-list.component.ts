import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscriber, Subscription } from 'rxjs';
import { ListHelperService } from 'src/app/services/list-helper.service';
import { TodoItem } from '../types/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<TodoItem[]> | undefined;
  constructor(private listService: ListHelperService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    // this.fetchTodoList();
    // }, 5000);
  }

  // private fetchTodoList(): void {
  //   this.todoList$ = this.listService.fetchListItems();
  // }

}
