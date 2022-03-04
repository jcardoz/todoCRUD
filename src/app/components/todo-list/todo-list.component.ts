import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListHelperService } from 'src/app/services/list-helper.service';
import { TodoItem } from '../types/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<BehaviorSubject<TodoItem[]>> | undefined;
  constructor(private listService: ListHelperService) { }

  ngOnInit(): void {
    this.fetchTodoList();
  }

  private fetchTodoList(): void {
    this.todoList$ = this.listService.getListItems();
  }

  public addNewItem(): void {
    const newItem: TodoItem = {
      id: 100,
      body: 'SUPER FANCY NEW ITEM',
      isPending: true
    };
    this.listService.addNewItem(newItem);
  }

  public deleteFirstItem(): void {
    this.listService.deleteItem(1);
  }

  public updateItem(): void {
    this.listService.updateItem({
      id: 3,
      body: 'sample todo 3',
      isPending: false,
    });
  }
}
