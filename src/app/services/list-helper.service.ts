import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TodoItem } from '../components/types/todo-item';

@Injectable({
  providedIn: 'root',
})
export class ListHelperService {
  constructor(private http: HttpClient) {
    // Initiate the list
    console.log(`list-helper.service.ts constructor`);
    this.todoListBS.next(this.todos);
    console.log(this.todos);
    console.log(this.todoListBS.value);
  }
  // The list
  private todos: TodoItem[] = [
    {
      id: 1,
      body: 'sample todo 1',
      isPending: true,
    },
    {
      id: 2,
      body: 'sample todo 2',
      isPending: true,
    },
    {
      id: 3,
      body: 'sample todo 3',
      isPending: true,
    },
    {
      id: 4,
      body: 'sample todo 4',
      isPending: false,
    },
  ];

  // The behavior subject which contains the list
  private todoListBS = new BehaviorSubject<TodoItem[]>([]);

  // Setup the list of items (Done in the constructor of the service)

  // CRUD
  // add a new list item (CREATE)
  public addNewItem(item: TodoItem): void {
    const currentItems = [...this.todoListBS.value];
    currentItems.push(item);
    this.todoListBS.next(currentItems);
  }

  // read a new item (READ)
  // get list of items
  public getListItems(): Observable<TodoItem[]> {
    return of(this.todoListBS.value);
  }

  // update an existing list item (UPDATE)
  public updateItem(item: TodoItem): void {
    const currentItems = [...this.todoListBS.value];
    const index = item.id;
    // remove the existing item
    // index is not 0 based - so subtracting 1
    currentItems.splice(index - 1, 1, item);
    this.todoListBS.next(currentItems);
  }

  // delete a list item (DELETE)
  public deleteItem(itemId: number): void {
    let currentItems = [...this.todoListBS.value];
    currentItems = currentItems.filter((item) => item.id !== itemId);
    this.todoListBS.next(currentItems);
  }

  public resetList(): void {
    const defaultList: TodoItem[] = [{
      id: 1,
      body: 'sample todo 1',
      isPending: true,
    },
    {
      id: 2,
      body: 'sample todo 2',
      isPending: true,
    },
    {
      id: 3,
      body: 'sample todo 3',
      isPending: true,
    },
    {
      id: 4,
      body: 'sample todo 4',
      isPending: false,
    }];
    this.todoListBS.next(defaultList);
  }
}
